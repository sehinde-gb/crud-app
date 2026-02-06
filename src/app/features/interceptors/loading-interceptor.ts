import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { GlobalLoadingService } from "../../services/global-loading.service";
import { finalize } from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingService = inject(GlobalLoadingService);
    loadingService.show();
    return next(req).pipe(
      finalize(() => loadingService.hide())
    );
}
