/**
 * LocalStorage Wrapper
 * Safe localStorage operations with error handling and in-memory fallback
 */
const Storage = (() => {
  // In-memory fallback storage
  const memoryStorage = new Map();
  let useMemoryFallback = false;
  let isStorageAvailable = false;

  /**
   * Detect if localStorage is available and writable
   */
  function detectStorage() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        console.warn('[Storage] localStorage not available - using in-memory fallback');
        useMemoryFallback = true;
        isStorageAvailable = false;
        return false;
      }

      // Test if we can write to localStorage
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, 'test');
      window.localStorage.removeItem(testKey);
      
      isStorageAvailable = true;
      useMemoryFallback = false;
      console.log('[Storage] localStorage available and writable');
      return true;
    } catch (error) {
      console.warn('[Storage] localStorage detected but not writable - using in-memory fallback', error);
      useMemoryFallback = true;
      isStorageAvailable = false;
      return false;
    }
  }

  // Run detection at startup
  detectStorage();

  return {
    /**
     * Flag indicating if persistent storage is available
     */
    get isAvailable() {
      return isStorageAvailable;
    },

    /**
     * Save data to storage
     */
    save(key, data) {
      try {
        const serialized = JSON.stringify(data);
        
        if (useMemoryFallback) {
          memoryStorage.set(key, serialized);
          return true;
        }

        localStorage.setItem(key, serialized);
        return true;
      } catch (error) {
        console.error('[Storage] Error saving data:', error);
        if (error.name === 'QuotaExceededError') {
          console.warn('[Storage] Quota exceeded - consider clearing old data');
        }
        
        // Fallback to memory if localStorage fails
        if (!useMemoryFallback) {
          console.warn('[Storage] Falling back to in-memory storage');
          useMemoryFallback = true;
          isStorageAvailable = false;
          try {
            memoryStorage.set(key, JSON.stringify(data));
            return true;
          } catch (memError) {
            console.error('[Storage] Memory fallback also failed:', memError);
          }
        }
        return false;
      }
    },

    /**
     * Load data from storage
     */
    load(key) {
      try {
        let data;
        
        if (useMemoryFallback) {
          data = memoryStorage.get(key);
        } else {
          data = localStorage.getItem(key);
        }

        return data ? JSON.parse(data) : null;
      } catch (error) {
        console.error('[Storage] Error loading data:', error);
        return null;
      }
    },

    /**
     * Remove data from storage
     */
    remove(key) {
      try {
        if (useMemoryFallback) {
          memoryStorage.delete(key);
          return true;
        }

        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('[Storage] Error removing data:', error);
        return false;
      }
    },

    /**
     * Check if key exists
     */
    has(key) {
      try {
        if (useMemoryFallback) {
          return memoryStorage.has(key);
        }

        return localStorage.getItem(key) !== null;
      } catch (error) {
        console.error('[Storage] Error checking key:', error);
        return false;
      }
    },

    /**
     * Clear all storage
     */
    clear() {
      try {
        if (useMemoryFallback) {
          memoryStorage.clear();
          return true;
        }

        localStorage.clear();
        return true;
      } catch (error) {
        console.error('[Storage] Error clearing storage:', error);
        return false;
      }
    },

    /**
     * Get all keys
     */
    keys() {
      try {
        if (useMemoryFallback) {
          return Array.from(memoryStorage.keys());
        }

        return Object.keys(localStorage);
      } catch (error) {
        console.error('[Storage] Error getting keys:', error);
        return [];
      }
    },

    /**
     * Get storage size (approximate bytes)
     */
    getSize() {
      try {
        let size = 0;
        
        if (useMemoryFallback) {
          for (const [key, value] of memoryStorage) {
            size += key.length + value.length;
          }
          return size;
        }

        for (const key in localStorage) {
          if (localStorage.hasOwnProperty(key)) {
            size += localStorage[key].length + key.length;
          }
        }
        return size;
      } catch (error) {
        console.error('[Storage] Error calculating size:', error);
        return 0;
      }
    },

    /**
     * Re-run storage detection (useful for testing or recovery)
     */
    redetect() {
      return detectStorage();
    }
  };
})();

// Make available globally
if (typeof window !== 'undefined') {
  window.Storage = Storage;
}
