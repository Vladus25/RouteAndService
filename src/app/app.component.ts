import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteAndService';

   // coutry!: any[];

  // constructor(private rest:RestService){}

  // ngOnInit(){
  //   const onSuccess = (res:any) => this.coutry = res;
  //   const onError = (res:any) => console.log(res);
  //   this.rest.getCountries().subscribe(onSuccess, onError);
  //   this.rest.getCountries().subscribe({
  //     next:(response:any)=> {this.users= response},
  //     error: (err:any)=> console.log(err)
  //   });
  // }

  // users=new User();

  // addUtente(){
  //   this.rest.addUser(this.users).subscribe(data=>console.log(data))
  // }
}
