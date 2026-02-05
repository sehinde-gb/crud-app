import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./post/index/index.component";
import { GlobalLoadingService } from './global-loading.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, IndexComponent]
})
export class AppComponent {
  title = 'crudv17';
  // Inject the service to access the loading signal
  loadingService = inject(GlobalLoadingService);
}
