import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:8080/ewteam';

  constructor() { }

  getBaseUrl(): String {
    return this.baseUrl;
}
}
