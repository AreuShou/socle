// gerer-clients.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerer-clients',
  templateUrl: './gerer-clients.component.html',
  styleUrls: ['./gerer-clients.component.css'],
})
export class GererClientsComponent implements OnInit {
listeClients: any;
  // listeClients: any[]; // Remplacez le type par le modèle de données approprié

  ngOnInit(): void {
    // Ajoutez la logique pour récupérer la liste des clients depuis le service
    // this.listeClients = ...;
  }

  supprimerClient(client: any): void {
    // Ajoutez la logique pour supprimer le client
  }

  modifierClient(client: any): void {
    // Ajoutez la logique pour modifier les informations du client
  }

  voirReservations(client: any): void {
    // Ajoutez la logique pour afficher les réservations du client
  }
}

