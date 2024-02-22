// connexion.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  user = {
    email: '',
    password: ''
  };

  loginForm: any = {};


  constructor(private fb: FormBuilder, private authService: AuthService,
    private route : ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      this.authService.login(userData).subscribe(
        (response) => {
          console.log('Connexion réussie', response);
          // Ajoutez ici la gestion de redirection ou d'affichage d'un message de succès
        },
        (error) => {
          console.error('Erreur lors de la connexion', error);
          // Ajoutez ici la gestion d'erreurs, par exemple afficher un message d'erreur à l'utilisateur
        }
      );
    } else {
      console.log("Le formulaire n'est pas valide");
    }
  }
}
