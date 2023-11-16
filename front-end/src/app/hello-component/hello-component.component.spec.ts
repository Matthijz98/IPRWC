import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponentComponent } from './hello-component.component';

describe('HelloComponentComponent', () => {
  let component: HelloComponentComponent;
  let fixture: ComponentFixture<HelloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
