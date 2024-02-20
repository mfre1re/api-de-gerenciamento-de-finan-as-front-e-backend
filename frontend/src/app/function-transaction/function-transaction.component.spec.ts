import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTransactionComponent } from './function-transaction.component';

describe('FunctionTransactionComponent', () => {
  let component: FunctionTransactionComponent;
  let fixture: ComponentFixture<FunctionTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
