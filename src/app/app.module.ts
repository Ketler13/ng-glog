import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NewSplitComponent } from './new-split/new-split.component';
import { SplitsComponent } from './splits/splits.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './auth/register/register.component';

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthComponent },
  { path: 'newsplit', component: NewSplitComponent },
  { path: 'splits', component: SplitsComponent },
  { path: 'excercises', component: ExcercisesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NewSplitComponent,
    SplitsComponent,
    ExcercisesComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
