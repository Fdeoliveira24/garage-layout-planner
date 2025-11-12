
/**
 * Configuration Constants
 * Central configuration for the Garage Layout Planner
 */
const Config = {
  // Scaling
  PX_PER_FOOT: 10,

  // Image rendering
  USE_IMAGES: true,

  // Floor Plans (in feet)
  FLOOR_PLANS: [
    { id: 'fp-20x25', widthFt: 20, heightFt: 25, name: "20' × 25'" },
    { id: 'fp-20x30', widthFt: 20, heightFt: 30, name: "20' × 30'" },
    { id: 'fp-20x40', widthFt: 20, heightFt: 40, name: "20' × 40'" },
    { id: 'fp-24x30', widthFt: 24, heightFt: 30, name: "24' × 30'" },
    { id: 'fp-24x40', widthFt: 24, heightFt: 40, name: "24' × 40'" },
    { id: 'fp-24x48', widthFt: 24, heightFt: 48, name: "24' × 48'" },
    { id: 'fp-24x50', widthFt: 24, heightFt: 50, name: "24' × 50'" }
  ],

  // Canvas
  CANVAS_PADDING: 50,
  GRID_SIZE: 10, // 1 foot in pixels

  // History
  MAX_HISTORY: 50,

  // Auto-save
  AUTOSAVE_INTERVAL: 30000, // 30 seconds

  // Entry Zone
  ENTRY_ZONE_PERCENTAGE: 0.12, // Bottom 12%

  // Units
  UNITS: {
    FEET: 'feet',
    METERS: 'meters'
  },

  // Export
  EXPORT_RESOLUTIONS: [1, 2, 4, 8],
  PDF_MARGINS: 0.5, // inches

  // Magnifier
  MAGNIFIER_ZOOM: 2.5,
  MAGNIFIER_SIZE: 150,

  // Keyboard
  NUDGE_DISTANCE: 2, // pixels
  NUDGE_DISTANCE_LARGE: 10, // pixels with Shift

  // Colors
  COLORS: {
    floorPlan: '#ffffff',
    floorPlanStroke: '#2c3e50',
    grid: '#b0b0b0',
    entryZone: 'rgba(255, 0, 0, 0.15)',
    entryZoneWarning: 'rgba(255, 0, 0, 0.3)',
    selection: '#2196F3',
    alignmentGuide: '#FF5722',
    dimension: '#666666'
  },

  // Storage Keys
  STORAGE_KEYS: {
    layouts: 'garage-planner-layouts',
    settings: 'garage-planner-settings',
    autosave: 'garage-planner-autosave'
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.Config = Config;
}
