import { Component, OnInit } from '@angular/core';
import { HttpclientserviceService } from './httpclientservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'http-client';
  posts: any;
  constructor(private getDataWeb: HttpclientserviceService) {}
  ngOnInit(): void {
    this.getDataWeb.getData().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log('Show Error');
      }
    );
  }
}
