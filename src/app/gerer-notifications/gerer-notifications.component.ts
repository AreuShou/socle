// gerer-notifications.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerer-notifications',
  templateUrl: './gerer-notifications.component.html',
  styleUrls: ['./gerer-notifications.component.css'],
})
export class GererNotificationsComponent implements OnInit {
listeNotifications: any;
  // listeNotifications: any[]; // Remplacez le type par le modèle de données approprié

  ngOnInit(): void {
    // Ajoutez la logique pour récupérer la liste des notifications depuis le service
    // this.listeNotifications = ...;
  }

  marquerCommeLue(notification: any): void {
    // Ajoutez la logique pour marquer la notification comme lue
  }

  supprimerNotification(notification: any): void {
    // Ajoutez la logique pour supprimer la notification
    // Exemple : this.notificationService.supprimerNotification(notification.id);
    // Assurez-vous que le service correspondant est injecté et que la méthode supprimerNotification est définie dans le service.
  }
}

