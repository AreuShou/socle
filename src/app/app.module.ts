import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PrestataireDashboardComponent } from './prestataire-dashboard/prestataire-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { RedirectionPageComponent } from './redirection-page/redirection-page.component';
import { GererPrestatairesComponent } from './gerer-prestataires/gerer-prestataires.component';
import { GererClientsComponent } from './gerer-clients/gerer-clients.component';
import { GererPermissionsComponent } from './gerer-permissions/gerer-permissions.component';
import { GererNotificationsComponent } from './gerer-notifications/gerer-notifications.component';
import { VoirComptesComponent } from './voir-comptes/voir-comptes.component';
import { GererCommentairesComponent } from './gerer-commentaires/gerer-commentaires.component';



const routes: Routes = [
  // Ajoutez vos routes ici
];

@NgModule({

  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AdminDashboardComponent,
    PrestataireDashboardComponent,
    ClientDashboardComponent,
    RedirectionPageComponent,
    GererPrestatairesComponent,
    GererClientsComponent,
    GererPermissionsComponent,
    GererNotificationsComponent,
    VoirComptesComponent,
    GererCommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
