import { Injectable, OnInit } from '@angular/core';
import { AppService } from "../global/app.service";

@Injectable({
  providedIn: 'root'
})
export class ElWarTeamService implements OnInit{

  private baseUrl: String = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.baseUrl = this.appService.getBaseUrl();
  }
}
