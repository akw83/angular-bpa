// Core Imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components, Directives, Services ...
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { DispositionComponent } from './disposition/disposition.component';
import { TestComponent } from './test/test.component';
import { SupaBoardComponent } from './supa-board/supa-board.component';
import { CollidingNodesComponent } from './d3/colliding-nodes/colliding-nodes.component';
import { NodesExampleComponent } from './d3/nodes-example/nodes-example.component';
import { NodeVisualComponent } from './d3/node-visual/node-visual.component';
import { LinkVisualComponent } from './d3/link-visual/link-visual.component';
import { ZoomableDirective } from './d3/directives/zoomable.directive';
import { DraggableDirective } from './d3/directives/draggable.directive';

// Applications modules
import { AppRoutingModule } from './app-routing.module';
import { D3ZoomModule } from './d3-zoom/d3-zoom.module';
import { ActionBoardModule } from './action-board/action-board.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NameEditorComponent,
    DispositionComponent,
    TestComponent,
    SupaBoardComponent,
    CollidingNodesComponent,
    NodesExampleComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    NgbModule, // bootstrap import
    DragDropModule,
    D3ZoomModule,
    ActionBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
