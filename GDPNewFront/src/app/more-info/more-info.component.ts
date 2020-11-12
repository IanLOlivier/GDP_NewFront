import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillOutputDTO } from '../SkillOutputDTO';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public displayString = '';

  constructor(private dialogRef: MatDialogRef<MoreInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Array<SkillOutputDTO>) { }

  ngOnInit(): void {
    this.displayText();
  }



  displayText(): void {
    for (let n = 0; n < this.data.length; n++){
      this.displayString += '\n';
      this.displayString += 'Required Skill: ' + this.data[n].skill + '\n';
      // tslint:disable-next-line: triple-equals

      if (this.data[n].employeeSkillList === undefined){
        this.displayString += 'Selected Employee: ' + 'No Match Found\n';

      }
      else {

      for (let m = 0; m < this.data[n].employeeSkillList.length; m++) {
          this.displayString += 'Selected Employee: ' + this.data[n].employeeSkillList[m].employeeName + '\n';
          this.displayString += 'Selected Employee Overall Match: '
          + this.data[n].employeeSkillList[m].employeeSkillMatchPercentage.toString() + '%' + '\n\n';
      }
    }
  }
  }

}


