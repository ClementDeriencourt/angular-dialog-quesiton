import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogTextComponent, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //console.log permet de voir si code marche dans la console du net
        this.animal = result;
      });
    }
  }

@Component({
  selector: 'app-dialog-text.component',
  templateUrl: 'dialog-text.component.html',
})
export class DialogTextComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

