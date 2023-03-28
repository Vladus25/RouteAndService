import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dettagli-bandiera',
  templateUrl: './dettagli-bandiera.component.html',
  styleUrls: ['./dettagli-bandiera.component.css']
})
export class DettagliBandieraComponent {
  bDetails!: any;

  constructor(private restService: RestService, private route: ActivatedRoute){}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.restService.getName(name).subscribe(bDetails=>{
      this.bDetails = bDetails;
    })
    // var bandiers= this.arrCoutry.find(city=>city.name === w);
  }
}
