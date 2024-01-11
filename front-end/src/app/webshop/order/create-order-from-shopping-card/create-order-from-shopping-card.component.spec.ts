import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderFromShoppingCardComponent } from './create-order-from-shopping-card.component';

describe('CreateOrderFromShoppingCardComponent', () => {
  let component: CreateOrderFromShoppingCardComponent;
  let fixture: ComponentFixture<CreateOrderFromShoppingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrderFromShoppingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrderFromShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
