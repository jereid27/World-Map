import { Component, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() resultEmitter = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  getDetails(event: MouseEvent) {
    const id = (event.target as SVGElement).id;
    this.apiService.getCountry(id).subscribe((data)=>{
      this.resultEmitter.emit(data)
      
    })
    
  }

}
