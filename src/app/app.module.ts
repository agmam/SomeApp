import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { UserestvwoComponent } from './userestvwo/userestvwo.component';
import {Routes, RouterModule} from "@angular/router";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent,
    UserestvwoComponent
  ],
  imports: [
    MaterialModule,
    Angular2FontawesomeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
