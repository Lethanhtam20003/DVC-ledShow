const DB_NAME = 'cham_tay_media_db';
const DB_VERSION = 1;
const STORE_NAME = 'media_blobs';

function openDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported'));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveMediaBlob(key, blob) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(blob, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getMediaBlob(key) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

export async function deleteMediaBlob(key) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadAllCustomMediaUrls() {
  try {
    const [handBlob, bgVideoBlob, actVideoBlob] = await Promise.all([
      getMediaBlob('customHandImage'),
      getMediaBlob('customBgVideo'),
      getMediaBlob('customActivationVideo'),
    ]);
    return {
      customHandImageUrl: handBlob ? URL.createObjectURL(handBlob) : null,
      customBgVideoUrl: bgVideoBlob ? URL.createObjectURL(bgVideoBlob) : null,
      customActivationVideoUrl: actVideoBlob ? URL.createObjectURL(actVideoBlob) : null,
    };
  } catch {
    return {
      customHandImageUrl: null,
      customBgVideoUrl: null,
      customActivationVideoUrl: null,
    };
  }
}

