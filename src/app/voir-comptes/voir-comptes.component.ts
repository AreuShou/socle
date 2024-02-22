// voir-comptes.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voir-comptes',
  templateUrl: './voir-comptes.component.html',
  styleUrls: ['./voir-comptes.component.css'],
})
export class VoirComptesComponent implements OnInit {
listeUtilisateurs: any;
  // listeUtilisateurs: any[]; // Remplacez le type par le modèle de données approprié

  ngOnInit(): void {
    // Ajoutez la logique pour récupérer la liste des utilisateurs depuis le service
    // this.listeUtilisateurs = ...;
  }

  modifierUtilisateur(utilisateur: any): void {
    // Ajoutez la logique pour rediriger vers la page de modification de l'utilisateur
    // Exemple : this.router.navigate(['/modifier-utilisateur', utilisateur.id]);
    // Assurez-vous que le service Router est injecté et que la configuration des routes est correcte.
  }

  supprimerUtilisateur(utilisateur: any): void {
    // Ajoutez la logique pour supprimer l'utilisateur
    // Exemple : this.utilisateurService.supprimerUtilisateur(utilisateur.id);
    // Assurez-vous que le service correspondant est injecté et que la méthode supprimerUtilisateur est définie dans le service.
  }
}

