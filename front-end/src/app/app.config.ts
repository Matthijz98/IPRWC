import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {AuthInterceptorService} from "./services/authInterceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([AuthInterceptorService]),
      withFetch(),),
    importProvidersFrom(NgxSmartModalModule.forRoot()),
  ]
};
