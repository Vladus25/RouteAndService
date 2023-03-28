import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttiUtentiComponent } from './tutti-utenti.component';

describe('TuttiUtentiComponent', () => {
  let component: TuttiUtentiComponent;
  let fixture: ComponentFixture<TuttiUtentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuttiUtentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuttiUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
