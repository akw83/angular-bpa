import { TestBed } from '@angular/core/testing';

import { ActionBoardService } from './action-board.service';

describe('ActionBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionBoardService = TestBed.get(ActionBoardService);
    expect(service).toBeTruthy();
  });
});
