import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTransactionComponent } from './pagination-transaction.component';

describe('ExtraTransactionComponent', () => {
  let component: ExtraTransactionComponent;
  let fixture: ComponentFixture<ExtraTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtraTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
