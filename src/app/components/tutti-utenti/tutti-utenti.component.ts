import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/user';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-tutti-utenti',
  templateUrl: './tutti-utenti.component.html',
  styleUrls: ['./tutti-utenti.component.css']
})
export class TuttiUtentiComponent {
  users: User[] = [];
  newUser: User = new User();
  snackBar: any;
  // dialog: any;

  constructor(private rest: RestService, private dialog: MatDialog) {}

  ngOnInit() {
    this.rest.getUsers().subscribe((users) => (this.users = users));
  }

  // addUser(){
  //   this.rest.addUser(this.newUser).subscribe((user) => {
  //     this.users.push(user);
  //     this.newUser = new User();
  //   });
  // }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rest.addUser(result).subscribe(
          () => {
            this.ngOnInit();
            this.snackBar.open('Utente aggiunto con successo', 'Chiudi', {
              duration: 3000
            });
          },
          error => {
            console.log(error);
            this.snackBar.open('Errore durante l\'aggiunta dell\'utente', 'Chiudi', {
              duration: 3000
            });
          }
        );
      }
    });
  }

  onDelete(user: User){
    if (confirm(`Sei sicuro di voler eliminare ${user.nome} ${user.cognome}?`)) {
      this.rest.deleteUser(user).subscribe(() => {
        this.users = this.users.filter((u) => u !== user);
      });
    }
  }

  onEdit(user: User) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',
      height: '300px',
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedUser: User = {
          id: user.id,
          nome: result.nome,
          cognome: result.cognome
        };
        this.rest.updateUser(updatedUser).subscribe(() => {
          const index = this.users.findIndex(u => u.id === updatedUser.id);
          this.users[index] = updatedUser;
        });
      }
    });
  }

}

