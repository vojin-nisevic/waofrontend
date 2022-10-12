import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { CustomError } from "../interface/custom-error";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:8080';
  customError = new Subject<CustomError>();

  constructor() { }

  getBaseUrl(): String {
    return this.baseUrl;
}
}
