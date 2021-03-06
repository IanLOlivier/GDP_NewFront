import { SkillOutputDTO } from './SkillOutputDTO';
import { EmployeeSkillsHttpService } from './employeeSkillsHttpService';
import { ProjectDescriptionDTO } from './projectDescriptionDTO';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamResponseDTO } from './TeamResponse';
import { EmployeeWithSkillsDTO } from './EmployeeWithSkillsDTO';
import { MatDialog } from '@angular/material/dialog';
import { MoreInfoComponent } from './more-info/more-info.component';
import { Employee } from './Employee';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'skills'];
  public addProjectDescription: FormGroup;
  dataSource = ELEMENT_DATA;

  public title = 'GDPNewFront';
  public projectCode: FormControl;
  public teamSize: FormControl;
  public description: FormControl;
  public loading = true;
  public spinnerShow = false;
  public skillInfo: Array<SkillOutputDTO> = Array<SkillOutputDTO>();

  constructor(private formBuilder: FormBuilder,
              private moreInfoDialog: MatDialog,
              private employeeSkillsHttpService: EmployeeSkillsHttpService){}

  public ngOnInit(): void {
    this.projectCode = new FormControl('', [Validators.required]);
    this.teamSize = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);

    this.addProjectDescription = this.formBuilder.group({
      projectCode: this.projectCode,
      teamSize: this.teamSize,
      description: this.description
    });
  }

  public onClick(): void {
    this.loading = true;
    this.spinnerShow = true;
    const projectCode: string = this.projectCode.value;
    const teamSize: number = this.teamSize.value;
    const description: string = this.description.value;

    const projectDescriptionDTO: ProjectDescriptionDTO = {
      projectCode: projectCode.trim().toLowerCase(),
      teamSize,
      description: description.trim().toLowerCase()
    };

    this.employeeSkillsHttpService.getSkills(projectDescriptionDTO).subscribe((data: TeamResponseDTO) => {
        this.dataSource = data.employeeSkills;
        this.skillInfo = data.skillOutputDTO;
        this.loading = false;
        this.spinnerShow = false;

    });

  }

  public moreInfo(): void {
    const dialogRef = this.moreInfoDialog.open(MoreInfoComponent, {
        restoreFocus: false,
        width: '500px',
        height: '500px',
        data: this.skillInfo
    });


  }


public openUserInfoDialog(employee: Employee): void {

  const dialogRef = this.moreInfoDialog.open(UserInfoDialogComponent, {
    restoreFocus: false,
    width: '500px',
    height: '500px',
    data: employee
});
}

}


const ELEMENT_DATA: EmployeeWithSkillsDTO[] = [
  // {name: 'Martin', skills: ['AWS, AZURE, JAVA']},
  // {name: 'Ian', skills: ['AWS, AZURE, SQL']},
  // {name: 'Martin', skills: ['AWS, AZURE, JAVA']},
  // {name: 'Ian', skills: ['AWS, AZURE, SQL']},
  // {name: 'Martin', skills: ['AWS, AZURE, JAVA']},
  // {name: 'Ian', skills: ['AWS, AZURE, SQL']},
  // {name: 'Martin', skills: ['AWS, AZURE, JAVA']},
  // {name: 'Ian', skills: ['AWS, AZURE, SQL']}
];
