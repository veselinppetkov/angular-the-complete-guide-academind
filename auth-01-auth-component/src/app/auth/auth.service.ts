import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";
import { User } from "./user.model";

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private tokenExpTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.API_KEY, {
            email,
            password,
            returnSecureToken: true
        }).pipe(
            catchError(this.errorHandler), tap(resData => {
                this.authHandler(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            })
        )
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.API_KEY, {
            email,
            password,
            returnSecureToken: true
        }).pipe(
            catchError(this.errorHandler), tap(resData => {
                this.authHandler(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            })
        )
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpDate: string,
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }

        const userLoaded = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpDate));

        if (userLoaded.token) {
            this.user.next(userLoaded);
            const expDuration = new Date(userData._tokenExpDate).getTime() - new Date().getTime();
            this.autoLogout(expDuration);
        }

    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpTimer) {
            clearTimeout(this.tokenExpTimer);
        }
        this.tokenExpTimer = null;
    }

    autoLogout(expDuration: number) {
        this.tokenExpTimer = setTimeout(() => { this.logout(); }, expDuration)
    }

    private errorHandler(errorRes: HttpErrorResponse) {
        let errorMessage = "An unknown error occured!";

        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }

        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'The email address is already in use by another account.'
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password sign-in is disabled for this project.'
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password.'
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.'
                break;
        }
        return throwError(errorMessage);

    }

    private authHandler(email: string, userId: string, token: string, expiresIn: number) {
        const expDate = new Date(new Date().getTime() + expiresIn * 1000);
        const userData = new User(email, userId, token, expDate);
        this.user.next(userData);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(userData));
    }

}