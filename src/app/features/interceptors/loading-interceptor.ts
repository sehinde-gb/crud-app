import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { GlobalLoadingService } from "../../services/global-loading.service";
import { catchError, finalize, throwError } from "rxjs";
import { ToastService } from "../../services/toast.service";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(GlobalLoadingService);
    const toast = inject(ToastService);

    loadingService.show();
   
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Automatic error notification
        const message = error.error?.message || 'Something went wrong!';
        toast.showError(message);

        return throwError(() => error);
      }),

      finalize(() => loadingService.hide())
    );
}
