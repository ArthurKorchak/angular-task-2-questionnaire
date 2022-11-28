import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MainSelectors } from "src/app/_core/state/main.selectors";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let clonedReq = req;

    return next.handle(clonedReq);
  };
};