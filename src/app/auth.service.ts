import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserType(): string {
    throw new Error('Method not implemented.');
  }
  authToken: any;
  isLoggedIn(): boolean {
    // Logique pour déterminer si l'utilisateur est connecté
    // Retourne true si connecté, false sinon
    return !!this.authToken;/* Votre logique ici */;
  }
  private apiUrl = 'http://localhost:8000/api'; // Mettez votre URL API ici

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

}
