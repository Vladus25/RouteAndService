
import { User } from 'src/app/user';

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  // user: User = { nome: '', cognome: '' };
  // user: User[] = [];

  // constructor(
  //   public dialogRef: MatDialogRef<AddUserComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  //   private restService: RestService
  // ) {}

  // ngOnInit(): void {
  // }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // onAddClick(): void {
  //   this.dialogRef.close(this.user);
  // }
}
