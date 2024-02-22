// gerer-prestataires.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerer-prestataires',
  templateUrl: './gerer-prestataires.component.html',
  styleUrls: ['./gerer-prestataires.component.css'],
})
export class GererPrestatairesComponent implements OnInit {
  // Initialisez la liste des prestataires (à adapter selon votre logique)
  listePrestataires: any[] = [
    { nom: 'Prestataire 1', email: 'prestataire1@example.com' },
    { nom: 'Prestataire 2', email: 'prestataire2@example.com' },
    // ... Ajoutez d'autres prestataires
  ];

  constructor() {}

  ngOnInit(): void {
    // Ajoutez ici la logique d'initialisation, par exemple, récupérer la liste des prestataires depuis votre backend
  }

  supprimerPrestataire(prestataire: any): void {
    // Ajoutez ici la logique pour supprimer le prestataire
    console.log('Suppression du prestataire :', prestataire);
  }

  attribuerAcces(prestataire: any): void {
    // Ajoutez ici la logique pour attribuer des accès au prestataire
    console.log('Attribution d\'accès au prestataire :', prestataire);
  }

  communiquerAvecPrestataire(prestataire: any): void {
    // Ajoutez ici la logique pour communiquer avec le prestataire
    console.log('Communication avec le prestataire :', prestataire);
  }
}

