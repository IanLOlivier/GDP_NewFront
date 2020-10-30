import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillOutput } from '../SkillOutputDTO';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public displayString = '';

  constructor(private dialogRef: MatDialogRef<MoreInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Array<SkillOutput>) { }

  ngOnInit(): void {
    this.displayText();
  }



  displayText(): void {
    for (let n = 0; n < this.data.length; n++){
      this.displayString += '\n';
      this.displayString += 'Required Skill: ' + this.data[n].skill_description + '\n';
      // tslint:disable-next-line: triple-equals

      if (this.data[n].employee_skill_arr === undefined){
        this.displayString += 'Selected Employee: ' + 'No Match Found\n';

      }
      else {

      for (let m = 0; m < this.data[n].employee_skill_arr.length; m++) {
          this.displayString += 'Selected Employee: ' + this.data[n].employee_skill_arr[m].employee_name + '\n';
          this.displayString += 'Selected Employee Overall Match: '
          + this.data[n].employee_skill_arr[m].employee_skills_percentage.toString() + '%' + '\n\n'
      }
    }
  }
  }

}


