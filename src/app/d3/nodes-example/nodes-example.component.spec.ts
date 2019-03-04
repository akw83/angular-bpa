import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesExampleComponent } from './nodes-example.component';

describe('NodesExampleComponent', () => {
  let component: NodesExampleComponent;
  let fixture: ComponentFixture<NodesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
