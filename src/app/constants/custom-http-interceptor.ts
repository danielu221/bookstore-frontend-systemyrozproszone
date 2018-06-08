import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpEvent } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { HttpHeaders } from "@angular/common/http";
import "rxjs/add/observable/fromPromise";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.handleAccess(request, next));
  }

  private async handleAccess(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Promise<HttpEvent<any>> {
    var token = await this.authService.getToken();
    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: any = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (token) {
      headerSettings["Authorization"] = token;
    }
    console.log(token);
    headerSettings["Content-Type"] = "application/json";
    console.log(headerSettings);
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader
    });
    return next.handle(changedRequest).toPromise();
  }
}
