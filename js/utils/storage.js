/**
 * LocalStorage Wrapper
 * Safe localStorage operations with error handling
 */
const Storage = {
  /**
   * Save data to localStorage
   */
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Storage error (save):', error);
      if (error.name === 'QuotaExceededError') {
        console.warn('Storage quota exceeded. Consider clearing old data.');
      }
      return false;
    }
  },

  /**
   * Load data from localStorage
   */
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Storage error (load):', error);
      return null;
    }
  },

  /**
   * Remove data from localStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage error (remove):', error);
      return false;
    }
  },

  /**
   * Check if key exists
   */
  has(key) {
    return localStorage.getItem(key) !== null;
  },

  /**
   * Clear all storage
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage error (clear):', error);
      return false;
    }
  },

  /**
   * Get all keys
   */
  keys() {
    return Object.keys(localStorage);
  },

  /**
   * Get storage size (approximate)
   */
  getSize() {
    let size = 0;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        size += localStorage[key].length + key.length;
      }
    }
    return size;
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.Storage = Storage;
}
