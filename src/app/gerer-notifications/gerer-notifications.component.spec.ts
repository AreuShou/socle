import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererNotificationsComponent } from './gerer-notifications.component';

describe('GererNotificationsComponent', () => {
  let component: GererNotificationsComponent;
  let fixture: ComponentFixture<GererNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererNotificationsComponent]
    });
    fixture = TestBed.createComponent(GererNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
