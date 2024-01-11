import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequiredComponent } from './login-required.component';

describe('LoginRequiredComponent', () => {
  let component: LoginRequiredComponent;
  let fixture: ComponentFixture<LoginRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRequiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
