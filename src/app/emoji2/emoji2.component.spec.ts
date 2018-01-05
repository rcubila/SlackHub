import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Emoji2Component } from './emoji2.component';

describe('Emoji2Component', () => {
  let component: Emoji2Component;
  let fixture: ComponentFixture<Emoji2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emoji2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emoji2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
