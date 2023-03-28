import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBandiereComponent } from './lista-bandiere.component';

describe('ListaBandiereComponent', () => {
  let component: ListaBandiereComponent;
  let fixture: ComponentFixture<ListaBandiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBandiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBandiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
