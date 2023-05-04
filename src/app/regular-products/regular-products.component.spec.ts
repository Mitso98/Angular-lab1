import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularProductsComponent } from './regular-products.component';

describe('RegularProductsComponent', () => {
  let component: RegularProductsComponent;
  let fixture: ComponentFixture<RegularProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
