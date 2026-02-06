import { Injectable, signal } from '@angular/core';
export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  showError(errorMessage: string) {
    this.show(errorMessage, 'error', 5000);
  }

  showSuccess(successMessage: string) {
    this.show(successMessage, 'success', 5000)
  }
  // A signal to hold the current toast. null means no toast is shown.
  currentToast = signal<Toast | null>(null);

  show(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000) {
    this.currentToast.set({ message, type });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      this.currentToast.set(null);
    }, duration);

  }
}
