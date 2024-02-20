import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user = {
    password: '',
    password_confirmation: ''
  };
   
  registerForm: any = {};
  

  constructor(private fb: FormBuilder, private authService: AuthService,
    private route : ActivatedRoute,
    private router : Router)
  {} 

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      roles: ['', Validators.required],
      // roles: 'user' ,
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
    const userData = this.registerForm.value;
    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        // Ajoutez ici la gestion de redirection ou d'affichage d'un message de succès
      },
      // (error) => {
      //   console.error('Erreur lors de l\'inscription', error);
      //   // Ajoutez ici la gestion d'erreurs, par exemple afficher un message d'erreur à l'utilisateur
      // }
    );
    if (this.user.password !== this.user.password_confirmation) {
      // Gestion du cas où les mots de passe ne correspondent pas
      console.log("Les mots de passe ne correspondent pas");
      return;
    }
     
      this.router.navigate(['']);
    
  } 
  else {
    console.log("Le formulaire n'est pas valide");
  } 
}
}
