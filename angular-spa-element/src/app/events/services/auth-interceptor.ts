import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }
    //Wrong code please fix with logic
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers
            .set('Content-Type', 'application/json')
            .set("x-access-token", this.getToken());
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
    getToken(): string {
        return sessionStorage.getItem("token");
    }
}