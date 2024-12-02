import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ValidationException } from "../dto/response/ValidationException.model";


@Injectable()
export class HttpErrorInterceptor implements HttpErrorInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            retry(0),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = undefined;
                let errorObject = error;

                if (errorObject instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = "Error: " +  error.error.message;
                } else {                    
                    try {
                        if (errorObject){
                            let validationException: ValidationException = errorObject.error;
                            errorMessage = (validationException) ? validationException.code : errorObject.message;
                        } else {
                            errorMessage = errorObject.message;
                        }
                        
                        
                    } catch (error) {
                        errorMessage = errorObject.message;
                    }                    
                }
                errorMessage = (errorMessage) ? errorMessage : (error.message);
                return throwError(errorMessage);
            })
        )                
    }
}