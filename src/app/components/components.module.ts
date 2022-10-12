import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { ElWarTeamsComponent } from './el-war-teams/el-war-teams.component';
import { MatMenuModule } from "@angular/material/menu";
import { ElWarTeamDetailsComponent } from './el-war-team-details/el-war-team-details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ElWarTeamsComponent,
    ElWarTeamDetailsComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    MatMenuModule
  ]
})
export class ComponentsModule { }
