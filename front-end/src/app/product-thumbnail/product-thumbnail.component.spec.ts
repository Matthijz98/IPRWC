import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbnailComponent } from './product-thumbnail.component';

describe('ProductThumbnailComponent', () => {
  let component: ProductThumbnailComponent;
  let fixture: ComponentFixture<ProductThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
