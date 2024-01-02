import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {NgxSmartModalModule} from "ngx-smart-modal";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(NgxSmartModalModule.forRoot()),
  ]
};
