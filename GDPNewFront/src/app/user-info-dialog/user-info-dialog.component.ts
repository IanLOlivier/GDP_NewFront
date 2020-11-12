import { Employee } from './../Employee';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.css']
})
export class UserInfoDialogComponent implements OnInit {

  public displayString = '';

  constructor(private dialogRef: MatDialogRef<UserInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee) { }

ngOnInit(): void {
  this.displayText();
}



displayText(): void {
    this.displayString = 'About me: ';
    this.displayString += '\n';
    this.displayString += '\n';
    this.displayString += this.data.aboutMe;
    this.displayString += '\n';
    this.displayString += '\n';
    this.displayString += 'Tags: ';
    this.displayString += '\n';
    this.displayString += this.data.tags.split(',').join(', ');

  }
}






