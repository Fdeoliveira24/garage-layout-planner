/**
 * Item Library
 * Pre-defined items with realistic dimensions (all VERTICAL by default)
 * lengthFt = height (vertical), widthFt = width (horizontal)
 */
const Items = {
  categories: {
    vehicles: {
      name: 'Vehicles',
      items: [
        {
          id: 'sports-car',
          label: 'Sports Car',
          lengthFt: 15,
          widthFt: 6,
          color: '#FF5722',
          category: 'vehicles'
        },
        {
          id: 'sedan',
          label: 'Sedan',
          lengthFt: 16,
          widthFt: 6,
          color: '#2196F3',
          category: 'vehicles'
        },
        {
          id: 'pickup',
          label: 'Pickup Truck',
          lengthFt: 19,
          widthFt: 6.5,
          color: '#4CAF50',
          category: 'vehicles'
        },
        {
          id: 'suv',
          label: 'SUV',
          lengthFt: 17,
          widthFt: 6.5,
          color: '#9C27B0',
          category: 'vehicles'
        },
        {
          id: 'motorcycle',
          label: 'Motorcycle',
          lengthFt: 7,
          widthFt: 3,
          color: '#FF9800',
          category: 'vehicles'
        },
        {
          id: 'compact-car',
          label: 'Compact Car',
          lengthFt: 14,
          widthFt: 5.5,
          color: '#00BCD4',
          category: 'vehicles'
        },
        {
          id: 'van',
          label: 'Van',
          lengthFt: 18,
          widthFt: 6.5,
          color: '#795548',
          category: 'vehicles'
        }
      ]
    },
    recreational: {
      name: 'Recreational Vehicles',
      items: [
        {
          id: 'boat-trailer',
          label: 'Boat with Trailer',
          lengthFt: 20,
          widthFt: 7,
          color: '#03A9F4',
          category: 'recreational'
        },
        {
          id: 'rv-26',
          label: 'RV (26 ft)',
          lengthFt: 26,
          widthFt: 8,
          color: '#8BC34A',
          category: 'recreational'
        },
        {
          id: 'rv-34',
          label: 'RV (34 ft)',
          lengthFt: 34,
          widthFt: 8.5,
          color: '#CDDC39',
          category: 'recreational'
        },
        {
          id: 'jet-ski-trailer',
          label: 'Jet Ski with Trailer',
          lengthFt: 12,
          widthFt: 5,
          color: '#00ACC1',
          category: 'recreational'
        },
        {
          id: 'atv',
          label: 'ATV',
          lengthFt: 7,
          widthFt: 4,
          color: '#FFC107',
          category: 'recreational'
        }
      ]
    },
    storage: {
      name: 'Storage & Furniture',
      items: [
        {
          id: 'shelf',
          label: 'Storage Shelf',
          lengthFt: 4,
          widthFt: 2,
          color: '#607D8B',
          category: 'storage'
        },
        {
          id: 'workbench',
          label: 'Workbench',
          lengthFt: 6,
          widthFt: 2.5,
          color: '#795548',
          category: 'storage'
        },
        {
          id: 'storage-box',
          label: 'Storage Box',
          lengthFt: 3,
          widthFt: 3,
          color: '#9E9E9E',
          category: 'storage'
        },
        {
          id: 'tool-cabinet',
          label: 'Tool Cabinet',
          lengthFt: 5,
          widthFt: 2,
          color: '#E53935',
          category: 'storage'
        },
        {
          id: 'bike-rack',
          label: 'Bike Rack',
          lengthFt: 6,
          widthFt: 2,
          color: '#1976D2',
          category: 'storage'
        },
        {
          id: 'freezer',
          label: 'Chest Freezer',
          lengthFt: 5,
          widthFt: 2.5,
          color: '#FFFFFF',
          category: 'storage'
        },
        {
          id: 'ladder-rack',
          label: 'Ladder Rack',
          lengthFt: 8,
          widthFt: 1.5,
          color: '#FFB300',
          category: 'storage'
        },
        {
          id: 'pegboard',
          label: 'Pegboard',
          lengthFt: 4,
          widthFt: 0.5,
          color: '#8D6E63',
          category: 'storage'
        },
        {
          id: 'small-shelf',
          label: 'Small Shelf',
          lengthFt: 3,
          widthFt: 1.5,
          color: '#78909C',
          category: 'storage'
        }
      ]
    }
  },

  /**
   * Get all items
   */
  getAll() {
    const allItems = [];
    for (const category in this.categories) {
      allItems.push(...this.categories[category].items);
    }
    return allItems;
  },

  /**
   * Get item by ID
   */
  getById(id) {
    return this.getAll().find(item => item.id === id);
  },

  /**
   * Get items by category
   */
  getByCategory(categoryName) {
    return this.categories[categoryName]?.items || [];
  },

  /**
   * Get all category names
   */
  getCategoryNames() {
    return Object.keys(this.categories);
  },

  /**
   * Search items by name
   */
  search(query) {
    const lowerQuery = query.toLowerCase();
    return this.getAll().filter(item => 
      item.label.toLowerCase().includes(lowerQuery) ||
      item.id.toLowerCase().includes(lowerQuery)
    );
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.Items = Items;
}
