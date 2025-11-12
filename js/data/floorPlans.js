/**
 * Floor Plan Definitions
 * Pre-defined floor plan templates
 */
const FloorPlans = {
  templates: [
    {
      id: 'fp-unit-a',
      name: "Units A - 22' × 55'",
      widthFt: 22,
      heightFt: 55,
      type: 'rectangular',
      area: 1210,
      description: "Door: 14' × 14'",
      doorWidthFt: 14,
      doorHeightFt: 14
    },
    {
      id: 'fp-unit-b',
      name: "Units B - 15' × 55'",
      widthFt: 15,
      heightFt: 55,
      type: 'rectangular',
      area: 825,
      description: "Door: 13' × 14'",
      doorWidthFt: 13,
      doorHeightFt: 14
    },
    {
      id: 'fp-unit-c',
      name: "Units C - 15' × 55'",
      widthFt: 15,
      heightFt: 55,
      type: 'rectangular',
      area: 825,
      description: "Door: 13' × 14'",
      doorWidthFt: 13,
      doorHeightFt: 14
    },
    {
      id: 'fp-unit-d',
      name: "Units D - 15' × 50'",
      widthFt: 15,
      heightFt: 50,
      type: 'rectangular',
      area: 750,
      description: "Door: 13' × 14'",
      doorWidthFt: 13,
      doorHeightFt: 14
    },
    {
      id: 'fp-unit-e',
      name: "Units E - 14' × 35'",
      widthFt: 14,
      heightFt: 35,
      type: 'rectangular',
      area: 490,
      description: "Door: 12' × 12'",
      doorWidthFt: 12,
      doorHeightFt: 12
    },
    {
      id: 'fp-unit-f',
      name: "Units F - 18' × 50'",
      widthFt: 18,
      heightFt: 50,
      type: 'rectangular',
      area: 900,
      description: "Door: 14' × 14'",
      doorWidthFt: 14,
      doorHeightFt: 14
    },
    {
      id: 'fp-unit-h',
      name: "Units H - 15' × 50'",
      widthFt: 15,
      heightFt: 50,
      type: 'rectangular',
      area: 750,
      description: "Door: 13' × 14'",
      doorWidthFt: 13,
      doorHeightFt: 14
    }
  ],

  /**
   * Get floor plan by ID
   */
  getById(id) {
    return this.templates.find((fp) => fp.id === id);
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
    return this.templates.filter((fp) => fp.type === type);
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.FloorPlans = FloorPlans;
}
