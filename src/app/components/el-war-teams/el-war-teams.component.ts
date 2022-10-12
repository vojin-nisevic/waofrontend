import { Component, OnDestroy, OnInit } from '@angular/core';
import { ElWarTeam } from "../../interface/el-war-team";
import { ElWarTeamService } from "../../services/el-war-team.service";
import { Subscription } from "rxjs";
import { CustomError} from '../../interface/custom-error';
import { AppService } from "../../global/app.service";
import { HttpStatusCode } from "@angular/common/http";

@Component({
  selector: 'app-el-war-teams',
  templateUrl: './el-war-teams.component.html',
  styleUrls: ['./el-war-teams.component.css']
})
export class ElWarTeamsComponent implements OnInit, OnDestroy {

  teams: ElWarTeam[] = [];
  team: ElWarTeam | null = null;
  showDetails: boolean = false;
  // teamSubscription =  new Subscription();


  constructor(private elWarService: ElWarTeamService, private appService: AppService) {

  }

  ngOnInit(): void {
    this.fetchTeams();
  }

  //fetch all teams
  public fetchTeams() {
    this.elWarService.fetchTeams()
      .subscribe({
        next: value => {
          this.teams = value;
        },
        error: err => {
          try {
            this.appService.customError.next(err);
          }
          catch (err) {
            this.appService.customError.next({
              message: "Internal server error, please try again later!",
              httpStatus: HttpStatusCode.InternalServerError,
              status: 500,
              timestamp: new Date()
            })
          }
        }
      });
  }

  //fetch team by id
  public fetchTeamById(id: number) {
    this.elWarService.fetchTeamById(id)
      .subscribe({
        next: value => {
          this.team = value;
          this.showDetails = true;
          console.log(this.team);
        },
        error: err => {
          try {
            this.appService.customError.next(err);
            console.log("Custom error");
            console.log(err);
          }
          catch (err) {
            this.appService.customError.next({
              message: "Internal server error, please try again later!",
              httpStatus: HttpStatusCode.InternalServerError,
              status: 500,
              timestamp: new Date()
            })
          }
        }
      });
    // this.team = this.teams[id];
    // this.showDetails = true;

  }

  ngOnDestroy(): void {
    // this.teamSubscription.unsubscribe();
  }

}
