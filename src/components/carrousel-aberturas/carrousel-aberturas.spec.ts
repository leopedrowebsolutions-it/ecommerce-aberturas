import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselAberturas } from './carrousel-aberturas';

describe('CarrouselAberturas', () => {
  let component: CarrouselAberturas;
  let fixture: ComponentFixture<CarrouselAberturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselAberturas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselAberturas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
