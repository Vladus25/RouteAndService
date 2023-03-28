import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-lista-bandiere',
  templateUrl: './lista-bandiere.component.html',
  styleUrls: ['./lista-bandiere.component.css']
})
export class ListaBandiereComponent {
  coutry!: any[];

  constructor(private rest:RestService, private router: Router){}

  ngOnInit(){
    const onSuccess = (res:any) => this.coutry = res;
    const onError = (res:any) => console.log(res);
    this.rest.getCountries().subscribe(onSuccess, onError);
  }

  detailFlags(nameband:string){
    this.router.navigate(['ListaBandiere/DettagliBandiera/', nameband]);
  }
}
