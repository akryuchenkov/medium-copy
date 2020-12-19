import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageforSaleComponent } from './new-pagefor-sale.component';

describe('NewPageforSaleComponent', () => {
  let component: NewPageforSaleComponent;
  let fixture: ComponentFixture<NewPageforSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPageforSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPageforSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
