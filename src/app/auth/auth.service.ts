import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AuthUrl: string = environment.AuthUrl;
  constructor(private routes: Router,
    private http: HttpClient,) { }

    loginUser(login: any): Observable<any> {
      return this.http.post<any>(`${this.AuthUrl}/login/`, login);
    }
    logout(){
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('userEmail');
      window.location.reload();
      this.routes.navigate(['/login']);
    }

    forgotPassword(email:any): Observable<any>{
      return this.http.post<any>(`${this.AuthUrl}/forgot-password/`, email)
    }

    resetPassword(data:any): Observable<any>{
      return this.http.post<any>(`${this.AuthUrl}/reset-password/`, data)
    }

    registerUser(data:any) : Observable<any>{
      return this.http.post<any>(`${this.AuthUrl}/register/`,data)
    }
}
