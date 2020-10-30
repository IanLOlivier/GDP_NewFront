import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProjectDescriptionDTO} from './projectDescriptionDTO';
import { Observable } from 'rxjs';
import { TeamResponseDTO } from './TeamResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillsHttpService {
  private endpoint = 'http://localhost:8080/get-employee-with-skills';


  constructor(private http: HttpClient) {}

  getSkills(projectDescriptionDTO: ProjectDescriptionDTO): Observable<TeamResponseDTO> {

    console.log(process.env.SERVER);
    return this.http.post<any>(this.endpoint, projectDescriptionDTO);
  }
}
