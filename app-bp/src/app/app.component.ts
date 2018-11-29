import { Component, AfterViewInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-bp';  
	tweetsdata : any;
  arrayTweet : Array<Object>;
  userInfos: Object;

  constructor(private http: Http){
		this.makecall();
	}

  makecall(): void {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      this.tweetsBP();
    })
  }

  tweetsBP(): void {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
		this.http.post('http://localhost:3000/tweetsBP', {headers: headers}).subscribe((res) => {
			if (res.status === 200){
				this.tweetsdata = res;
        this.arrayTweet = JSON.parse(this.tweetsdata._body);
        this.userInfos = (<any>this.arrayTweet[0]).user;
			}
		});
  	}
  }
