import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { PrestataireDashboardComponent } from './prestataire-dashboard/prestataire-dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { RedirectionPageComponent } from './redirection-page/redirection-page.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'prestataire-dashboard', component: PrestataireDashboardComponent },
  { path: 'redirection', component: RedirectionPageComponent },
  {
    path: 'client-dashboard',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard], // Utilisez le gardien de route ici
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard], // Ajoutez un gardien de route si nécessaire
    // children: [
    //   { path: 'prestataires', component: GestionPrestatairesComponent },
    //   { path: 'clients', component: GestionClientsComponent },
    //   { path: 'permissions', component: GestionPermissionsComponent },
    //   { path: 'comptes', component: VoirComptesComponent },
    //   { path: 'notifications', component: GestionNotificationsComponent },
    //   { path: '', redirectTo: 'prestataires', pathMatch: 'full' }, // Redirection par défaut
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
