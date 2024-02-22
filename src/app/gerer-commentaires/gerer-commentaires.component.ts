// gerer-commentaires.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerer-commentaires',
  templateUrl: './gerer-commentaires.component.html',
  styleUrls: ['./gerer-commentaires.component.css'],
})
export class GererCommentairesComponent implements OnInit {
listeCommentaires: any;
  // listeCommentaires: any[]; // Remplacez le type par le modèle de données approprié

  ngOnInit(): void {
    // Ajoutez la logique pour récupérer la liste des commentaires depuis le service
    // this.listeCommentaires = ...;
  }

  supprimerCommentaire(commentaire: any): void {
    // Ajoutez la logique pour supprimer le commentaire
    // Exemple : this.commentaireService.supprimerCommentaire(commentaire.id);
    // Assurez-vous que le service correspondant est injecté et que la méthode supprimerCommentaire est définie dans le service.
  }
}
