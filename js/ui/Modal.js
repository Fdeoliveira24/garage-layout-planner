/**
 * Modal and Toast UI System
 */
class Modal {
  static showPrompt(title, message, defaultValue = '') {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.style.display = 'flex';
      
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
        </div>
        <div class="modal-body">
          <p>${message}</p>
          <input type="text" class="modal-input" value="${defaultValue}" autofocus>
        </div>
        <div class="modal-footer">
          <button class="modal-btn modal-btn-secondary" data-action="cancel">Cancel</button>
          <button class="modal-btn modal-btn-primary" data-action="ok">OK</button>
        </div>
      `;
      
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      
      const input = modal.querySelector('.modal-input');
      input.focus();
      input.select();
      
      const handleClose = (value) => {
        overlay.remove();
        resolve(value);
      };
      
      modal.querySelector('[data-action="ok"]').addEventListener('click', () => {
        handleClose(input.value || null);
      });
      
      modal.querySelector('[data-action="cancel"]').addEventListener('click', () => {
        handleClose(null);
      });
      
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) handleClose(null);
      });
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleClose(input.value || null);
        if (e.key === 'Escape') handleClose(null);
      });
    });
  }

  static showToast(message, type = 'success', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  static showSuccess(message) {
    this.showToast(message, 'success');
  }

  static showError(message) {
    this.showToast(message, 'error');
  }

  static showInfo(message) {
    this.showToast(message, 'info');
  }
}

if (typeof window !== 'undefined') {
  window.Modal = Modal;
}
