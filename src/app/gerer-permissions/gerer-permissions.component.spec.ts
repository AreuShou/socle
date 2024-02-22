import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererPermissionsComponent } from './gerer-permissions.component';

describe('GererPermissionsComponent', () => {
  let component: GererPermissionsComponent;
  let fixture: ComponentFixture<GererPermissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererPermissionsComponent]
    });
    fixture = TestBed.createComponent(GererPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
