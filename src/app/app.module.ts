import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule, MdButtonModule, MdInputModule, MdTabsModule, MdListModule,
  MdCardModule, MdGridListModule, MdCheckboxModule, MdSliderModule, MdChipsModule,
  MdSnackBarModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NewSplitComponent } from './new-split/new-split.component';
import { SplitsComponent } from './splits/splits.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ExcerciseComponent } from './excercises/excercise/excercise.component';
import { NewExcerciseCreatorComponent } from './excercises/new-excercise-creator/new-excercise-creator.component';
import { SelectorComponent } from './new-split/selector/selector.component';
import { ChipsComponent } from './new-split/chips/chips.component';
import { SplitComponent } from './splits/split/split.component';
import { RaterComponent } from './splits/rater/rater.component';

import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ExcerciseService } from './shared/services/excercise.service';
import { SplitService } from './shared/services/split.service';

import { ArrayToStringPipe } from './shared/pipes/array-to-string.pipe';

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthComponent },
  { path: 'newsplit', component: NewSplitComponent, canActivate: [AuthGuardService] },
  { path: 'splits', component: SplitsComponent, canActivate: [AuthGuardService] },
  { path: 'excercises', component: ExcercisesComponent, canActivate: [AuthGuardService] }
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
    RegisterComponent,
    ExcerciseComponent,
    NewExcerciseCreatorComponent,
    SelectorComponent,
    ChipsComponent,
    ArrayToStringPipe,
    SplitComponent,
    RaterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    MdCheckboxModule,
    MdSliderModule,
    MdChipsModule,
    MdSnackBarModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [AuthService, AuthGuardService, ExcerciseService, SplitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
