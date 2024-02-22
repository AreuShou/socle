// redirection-page.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-redirection-page',
  templateUrl: './redirection-page.component.html',
  styleUrls: ['./redirection-page.component.css'],
})
export class RedirectionPageComponent implements OnInit {
  userType: string;

  constructor(private authService: AuthService) {
    this.userType = ''; // Initialisation ici
  }

  ngOnInit(): void {
    // Exemple: récupérer le type d'utilisateur depuis le service d'authentification
    this.userType = this.authService.getUserType();
  }
}
