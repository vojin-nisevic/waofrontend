import { Injectable, OnInit } from '@angular/core';
import { AppService } from "../global/app.service";
import { ElWarTeam } from "../models/el-war-team";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ElWarTeamService implements OnInit {

  private baseUrl: string = '';

  constructor(private appService: AppService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.baseUrl = this.appService.getBaseUrl() + '/ewteam';
  }

  //fetch all el war teams
  getAll() {
    return this.httpClient.get<ElWarTeam[]>(this.baseUrl);
  }

  //fetch team by id
  getTeamById(id: number) {
    return this.httpClient.get<ElWarTeam>(this.baseUrl + '/find',
      { params: { id: id } }
    );
  }

  //add new team
  addTeam(team: ElWarTeam) {
    return this.httpClient.post<ElWarTeam>(this.baseUrl + '/add',
      {ewteam: team}
      );
  }

  //edit team
  editTeam(team: ElWarTeam) {
    return this.httpClient.put<ElWarTeam>(this.baseUrl + '/add',
      {ewteam: team}
      );
  }

}
