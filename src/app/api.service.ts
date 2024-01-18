import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countryData: any;

  

  apiUrl = "https://api.worldbank.org/v2/country?format=json"

  constructor(private http: HttpClient) { }

  getCountry(id: string){
    return this.http.get<any[]>(`https://api.worldbank.org/v2/country/${id}?format=json`)
    
  }

  getData(id: string) {
    this.getCountry(id).subscribe((data)=>{
      this.countryData = data
      
    })
    }
  }
  



