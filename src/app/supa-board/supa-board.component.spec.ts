import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupaBoardComponent } from './supa-board.component';

describe('SupaBoardComponent', () => {
  let component: SupaBoardComponent;
  let fixture: ComponentFixture<SupaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
