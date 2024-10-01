import { TestBed } from '@angular/core/testing';

import { DadJokeService } from './dad-joke.service';
import {Observable} from "rxjs";

describe('DadJokeService', () => {
  let service: DadJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have a getDadJoke method', () => {
    expect(service.getDadJoke).toBeDefined();
  });
  it('should have a getDadJoke method that returns an Observable', () => {
    expect(service.getDadJoke()).toBeInstanceOf(Observable);
  });

});
