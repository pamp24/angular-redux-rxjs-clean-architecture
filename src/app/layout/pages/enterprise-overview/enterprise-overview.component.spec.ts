import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseOverviewComponent } from './enterprise-overview.component';

describe('EnterpriseOverviewComponent', () => {
  let component: EnterpriseOverviewComponent;
  let fixture: ComponentFixture<EnterpriseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterpriseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
