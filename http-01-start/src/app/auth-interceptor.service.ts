import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedReq = req.clone({ headers: req.headers.append('Auth', 'Vesko') })
        console.log(`It works just fine!`);
        return next.handle(modifiedReq).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived. Body data: ');
                console.log(event.body);
            }
        }));
    }

}