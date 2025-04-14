// dynamic-colors.js
class DynamicColors {
  constructor() {
    console.log('DynamicColors initialized');
    this.initialize();
  }

  async initialize() {
    try {
      console.log('Getting color data...');

      // Get colors from data attributes
      const productInfo = document.querySelector('[data-primary-color]');
      if (!productInfo) {
        console.error('Product info container not found');
        return;
      }

      const primaryColor = productInfo.dataset.primaryColor || '#000000';
      const secondaryColor = productInfo.dataset.secondaryColor || '#ffffff';
      const accentColor = productInfo.dataset.accentColor || '#000000';

      console.log('Colors:', {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor,
      });

      // Apply colors to CSS variables
      document.documentElement.style.setProperty('--dynamic-primary-color', primaryColor);
      document.documentElement.style.setProperty('--dynamic-secondary-color', secondaryColor);
      document.documentElement.style.setProperty('--dynamic-accent-color', accentColor);

      console.log('CSS variables updated');
    } catch (error) {
      console.error('Error applying dynamic colors:', error);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DynamicColors();
});
