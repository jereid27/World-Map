import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldmap';
  countryData: any;
  

  constructor(private apiService: ApiService){}

  mapData($event: any){
    let path = $event[1][0]
    this.countryData = {
      name:path['name'],
      capital:path['capitalCity'],
      region:path['region']['value'],
      incomeLevel:path['incomeLevel']['value'],
      latitude:path['latitude'],
      longitude:path['longitude']


      
    }
    }
  }

