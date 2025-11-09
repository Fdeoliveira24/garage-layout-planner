/**
 * Floor Plan Definitions
 * Pre-defined floor plan templates
 */
const FloorPlans = {
  templates: [
    {
      id: 'fp-20x25',
      name: '20\' × 25\'',
      widthFt: 20,
      heightFt: 25,
      type: 'rectangular',
      area: 500, // sq ft
      description: 'Compact single-car garage'
    },
    {
      id: 'fp-20x30',
      name: '20\' × 30\'',
      widthFt: 20,
      heightFt: 30,
      type: 'rectangular',
      area: 600,
      description: 'Single-car with storage'
    },
    {
      id: 'fp-20x40',
      name: '20\' × 40\'',
      widthFt: 20,
      heightFt: 40,
      type: 'rectangular',
      area: 800,
      description: 'Deep single-car garage'
    },
    {
      id: 'fp-24x30',
      name: '24\' × 30\'',
      widthFt: 24,
      heightFt: 30,
      type: 'rectangular',
      area: 720,
      description: 'Standard two-car garage'
    },
    {
      id: 'fp-24x40',
      name: '24\' × 40\'',
      widthFt: 24,
      heightFt: 40,
      type: 'rectangular',
      area: 960,
      description: 'Two-car with workshop space'
    },
    {
      id: 'fp-24x48',
      name: '24\' × 48\'',
      widthFt: 24,
      heightFt: 48,
      type: 'rectangular',
      area: 1152,
      description: 'Large two-car with storage'
    },
    {
      id: 'fp-24x50',
      name: '24\' × 50\'',
      widthFt: 24,
      heightFt: 50,
      type: 'rectangular',
      area: 1200,
      description: 'Extra-deep two-car garage'
    }
  ],

  /**
   * Get floor plan by ID
   */
  getById(id) {
    return this.templates.find(fp => fp.id === id);
  },

  /**
   * Get all floor plans
   */
  getAll() {
    return this.templates;
  },

  /**
   * Get floor plans by type
   */
  getByType(type) {
    return this.templates.filter(fp => fp.type === type);
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.FloorPlans = FloorPlans;
}
