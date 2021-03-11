import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSnackBarComponentComponent } from './customer-snack-bar-component.component';

describe('CustomerSnackBarComponentComponent', () => {
  let component: CustomerSnackBarComponentComponent;
  let fixture: ComponentFixture<CustomerSnackBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSnackBarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSnackBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
