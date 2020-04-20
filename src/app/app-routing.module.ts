import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'liste-plongees',
    loadChildren: () => import('./liste-plongees/liste-plongees.module').then( m => m.ListePlongeesPageModule)
  },
  {
    path: 'details-plongee/:id',
    loadChildren: () => import('./details-plongee/details-plongee.module').then( m => m.DetailsPlongeePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'liste-gonfleurs',
    loadChildren: () => import('./liste-gonfleurs/liste-gonfleurs.module').then( m => m.ListeGonfleursPageModule)
  },
  {
    path: 'liste-secu',
    loadChildren: () => import('./liste-secu/liste-secu.module').then( m => m.ListeSecuPageModule)
  },
  {
    path: 'ajout-plongee',
    loadChildren: () => import('./ajout-plongee/ajout-plongee.module').then( m => m.AjoutPlongeePageModule)
  },
  {
    path: 'reservation/:id',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'details-reservation/:id_plongee/:id_membre',
    loadChildren: () => import('./details-reservation/details-reservation.module').then( m => m.DetailsReservationPageModule)
  },
  {
    path: 'liste-reservation/:id',
    loadChildren: () => import('./liste-reservation/liste-reservation.module').then( m => m.ListeReservationPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
