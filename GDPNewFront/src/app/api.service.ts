import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ProjectDescriptionDTO} from './projectDescriptionDTO';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = 'https://26u6w88291.execute-api.eu-west-1.amazonaws.com/dev/speak';

  constructor(private http:HttpClient) {}

  send(data: ProjectDescriptionDTO) {
    return this.http.post(this.ENDPOINT, data);
  }
}
