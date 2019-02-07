import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { DispositionComponent } from './disposition/disposition.component';

// define routes here...
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '/disposition', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}, // colon (:) in the path indicates that :id is a placeholder for a specific hero id
  {path: 'nameforms', component: NameEditorComponent},
  {path: 'disposition', component: DispositionComponent},
  {path: 'test', component: TestComponent}
];

// ng generate module app-routing --flat --module=app
// --flat puts the file in src/app instead of its own folder.
// --module=app tells the CLI to register it in the imports array of the AppModule.

@NgModule({
  // initialize the router and start it listening for browser location changes
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

// Open the AppComponent template replace the <app-heroes> element with a <router-outlet> element
export class AppRoutingModule {}
