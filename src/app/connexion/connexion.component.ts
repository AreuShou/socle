// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-connexion',
//   templateUrl: './connexion.component.html',
//   styleUrls: ['./connexion.component.css']
// })
// export class ConnexionComponent {

// }

// Importez les modules nécessaires de Angular
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Définissez le composant Connexion
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  // Créez un formulaire réactif avec FormBuilder
  loginForm: FormGroup ;
  // loginFormGroup: [] = [];
  // Injectez le FormBuilder et le Router dans le constructeur
  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialisez le formulaire avec les champs nécessaires et les validateurs
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérifiez si le formulaire est valide
    if (this.loginForm.valid) {
      // Récupérez les valeurs du formulaire
      // const username = this.loginForm.get('username').value;
      // const password = this.loginForm.get('password').value;

      // Envoyez les données au backend pour la validation (vous devez implémenter cette partie)
      // Si la validation est réussie, vous pouvez rediriger l'utilisateur vers une autre page
      // Exemple de redirection vers une page après la connexion réussie :
      // this.router.navigate(['/tableau-de-bord']);
    }
  }
}
