import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPortalComponent } from './application-portal.component';

describe('ApplicationPortalComponent', () => {
  let component: ApplicationPortalComponent;
  let fixture: ComponentFixture<ApplicationPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
