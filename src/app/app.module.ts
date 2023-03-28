import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ListaBandiereComponent } from './components/lista-bandiere/lista-bandiere.component';
import { DettagliBandieraComponent } from './components/dettagli-bandiera/dettagli-bandiera.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TuttiUtentiComponent } from './components/tutti-utenti/tutti-utenti.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaBandiereComponent,
    DettagliBandieraComponent,
    TuttiUtentiComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatTableModule,
    NgbModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
