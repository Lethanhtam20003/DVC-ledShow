const DB_NAME = 'cham_tay_media_db';
const DB_VERSION = 2;
const STORE_NAME = 'media_blobs';
const MODELS_3D_STORE_NAME = 'models_3d';

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
      if (!db.objectStoreNames.contains(MODELS_3D_STORE_NAME)) {
        db.createObjectStore(MODELS_3D_STORE_NAME, { keyPath: 'id' });
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
    const [
      handBlob,
      bgVideoBlob,
      actVideoBlob,
      bgAudioBlob,
      countdownAudioBlob,
      fanfareAudioBlob,
    ] = await Promise.all([
      getMediaBlob('customHandImage'),
      getMediaBlob('customBgVideo'),
      getMediaBlob('customActivationVideo'),
      getMediaBlob('customBgAudio'),
      getMediaBlob('customCountdownAudio'),
      getMediaBlob('customFanfareAudio'),
    ]);
    return {
      customHandImageUrl: handBlob ? URL.createObjectURL(handBlob) : null,
      customBgVideoUrl: bgVideoBlob ? URL.createObjectURL(bgVideoBlob) : null,
      customActivationVideoUrl: actVideoBlob
        ? URL.createObjectURL(actVideoBlob)
        : null,
      customBgAudioUrl: bgAudioBlob ? URL.createObjectURL(bgAudioBlob) : null,
      customCountdownAudioUrl: countdownAudioBlob
        ? URL.createObjectURL(countdownAudioBlob)
        : null,
      customFanfareAudioUrl: fanfareAudioBlob
        ? URL.createObjectURL(fanfareAudioBlob)
        : null,
    };
  } catch {
    return {
      customHandImageUrl: null,
      customBgVideoUrl: null,
      customActivationVideoUrl: null,
      customBgAudioUrl: null,
      customCountdownAudioUrl: null,
      customFanfareAudioUrl: null,
    };
  }
}

function generate3dModelId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `3d-${crypto.randomUUID()}`;
  }
  return `3d-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function saveCustom3dModel(file) {
  const db = await openDb();
  const id = generate3dModelId();
  const createdAt = Date.now();
  const record = {
    id,
    name: file.name,
    size: file.size,
    type: file.type,
    createdAt,
    blob: file,
  };
  await new Promise((resolve, reject) => {
    const tx = db.transaction(MODELS_3D_STORE_NAME, 'readwrite');
    tx.objectStore(MODELS_3D_STORE_NAME).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  return {
    id,
    name: record.name,
    size: record.size,
    createdAt,
    url: URL.createObjectURL(file),
  };
}

export async function listCustom3dModels() {
  const db = await openDb();
  const records = await new Promise((resolve, reject) => {
    const tx = db.transaction(MODELS_3D_STORE_NAME, 'readonly');
    const req = tx.objectStore(MODELS_3D_STORE_NAME).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
  return records
    .slice()
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    .map((record) => ({
      id: record.id,
      name: record.name,
      size: record.size,
      createdAt: record.createdAt,
      url: record.blob ? URL.createObjectURL(record.blob) : null,
    }));
}

export async function getCustom3dModelUrl(id) {
  if (!id) return null;
  try {
    const db = await openDb();
    const record = await new Promise((resolve, reject) => {
      const tx = db.transaction(MODELS_3D_STORE_NAME, 'readonly');
      const req = tx.objectStore(MODELS_3D_STORE_NAME).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    return record?.blob ? URL.createObjectURL(record.blob) : null;
  } catch {
    return null;
  }
}

export async function deleteCustom3dModel(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MODELS_3D_STORE_NAME, 'readwrite');
    tx.objectStore(MODELS_3D_STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

