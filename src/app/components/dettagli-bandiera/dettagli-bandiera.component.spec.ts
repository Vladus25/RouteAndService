import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliBandieraComponent } from './dettagli-bandiera.component';

describe('DettagliBandieraComponent', () => {
  let component: DettagliBandieraComponent;
  let fixture: ComponentFixture<DettagliBandieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliBandieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliBandieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
