import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpclientserviceService {
  private url: any = 'https://api.github.com/gists/public';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}
