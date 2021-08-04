import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QKoolDashboardComponent } from './qkool-dashboard.component';

describe('QKoolDashboardComponent', () => {
  let component: QKoolDashboardComponent;
  let fixture: ComponentFixture<QKoolDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QKoolDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QKoolDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
