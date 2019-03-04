import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollidingNodesComponent } from './colliding-nodes.component';

describe('CollidingNodesComponent', () => {
  let component: CollidingNodesComponent;
  let fixture: ComponentFixture<CollidingNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollidingNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollidingNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
