import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
        @if (toastService.currentToast(); as toast) {
          <div class="toast-container" [class]="toast.type">
            {{ toast.message }}
            <button (click)="toastService.currentToast.set(null)">×</button>
          </div>
        }
          `,
  styles: [`
    .toast-container { position: fixed; top: 20px; right: 20px; padding: 1rem; border-radius: 8px; color: white; z-index: 1000; }
    .error { background: #ff4d4d; }
    .success { background: #2ecc71; }
  `]
  })
export class ToastComponent {
  public toastService = inject(ToastService);
}
