import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  @Input() tweet;

  open() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      tweet: this.tweet
    };
    this.dialog.open(ShareDialogComponent, dialogConfig);
  }

  dateFormater(): String {
    var date = new Date(this.tweet.created_at);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  }
}
