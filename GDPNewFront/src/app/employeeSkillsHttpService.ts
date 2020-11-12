import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProjectDescriptionDTO} from './projectDescriptionDTO';
import { Observable } from 'rxjs';
import { TeamResponseDTO } from './TeamResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillsHttpService {
  private endpoint = 'http://34.245.94.82:7000/get-employee-with-skills';


  constructor(private http: HttpClient) {}

  getSkills(projectDescriptionDTO: ProjectDescriptionDTO): Observable<TeamResponseDTO> {

    return this.http.post<any>(this.endpoint, projectDescriptionDTO);
  }
}
