import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NewSplitComponent } from './new-split/new-split.component';
import { SplitsComponent } from './splits/splits.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Route[] = [
  { path: '', redirectTo: 'newsplit', pathMatch: 'full'},
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
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
