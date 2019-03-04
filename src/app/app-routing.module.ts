import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { DispositionComponent } from './disposition/disposition.component';
import { SupaBoardComponent } from './supa-board/supa-board.component';
import { CollidingNodesComponent } from './d3/colliding-nodes/colliding-nodes.component';
import { PanZoomComponent } from './d3-zoom/pan-zoom/pan-zoom.component';
import { BrushZoomComponent } from './d3-zoom/brush-zoom/brush-zoom.component';

// define routes here...
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '/disposition', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}, // colon (:) in the path indicates that :id is a placeholder for a specific hero id
  {path: 'nameforms', component: NameEditorComponent},
  {path: 'disposition', component: DispositionComponent},
  {path: 'colliding-nodes', component: CollidingNodesComponent},
  {path: 'supa-board', component: SupaBoardComponent},
  {path: 'pan-zoom', component: PanZoomComponent},
  {path: 'brush-zoom', component: BrushZoomComponent}
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
