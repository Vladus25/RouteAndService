import { DettagliBandieraComponent } from './components/dettagli-bandiera/dettagli-bandiera.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBandiereComponent } from './components/lista-bandiere/lista-bandiere.component';
import { TuttiUtentiComponent } from './components/tutti-utenti/tutti-utenti.component';

const routes: Routes = [
  {path: '', component: NavBarComponent},
  {path: 'ListaBandiere', component: ListaBandiereComponent},
  {path: 'ListaBandiere/DettagliBandiera/:name', component: DettagliBandieraComponent},
  {path: 'TuttiUtenti', component: TuttiUtentiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
