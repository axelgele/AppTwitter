import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Http, Response} from '@angular/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  tweet;
  arrayHashtag: Array<Object>;

  constructor( private dialogRef: MatDialogRef<ShareDialogComponent>,
  @Inject(MAT_DIALOG_DATA) data,
  private http: Http) {
    this.tweet = data.tweet;
  
    if(data.tweet.entities.hashtags) {
      this.arrayHashtag = data.tweet.entities.hashtags;
    }
  }

  ngOnInit() {
  }

  sendMail(): void {
    var subjectMail = 'Voici un tweet qui devrait vous intéréssé.'
    var titleMail = `Banque Populaire a Tweeté le ${this.dateFormater()}`
    window.location.href = `mailto:?subject=${subjectMail}
    '&body=${titleMail}
     ${this.tweet.full_text}`
  }

  dateFormater(): String {
    var date = new Date(this.tweet.created_at);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  }
}
