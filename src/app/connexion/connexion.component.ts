
// connexion.component.ts


// src/app/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})

export class ConnexionComponent implements OnInit {
  loginForm: any = {};
  user = {
    email: '',
    password: ''
  };


  constructor(private fb: FormBuilder, private authService: AuthService,private route : ActivatedRoute,

    private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],

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

   const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        // Ajoutez ici la gestion de redirection ou d'affichage d'un message de succès
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        // Ajoutez ici la gestion d'erreurs, par exemple afficher un message d'erreur à l'utilisateur ok c'est bien compris
      }
    );


  }
}
