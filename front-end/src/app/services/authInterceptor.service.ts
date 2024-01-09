import {HttpInterceptorFn} from "@angular/common/http";
import {tap} from "rxjs";

export const AuthInterceptorService: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');
  let headers = req.headers;

  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }

  req = req.clone({
    headers
  });

  return next(req).pipe(
    tap(resp => console.log('response', resp))
  );
}
