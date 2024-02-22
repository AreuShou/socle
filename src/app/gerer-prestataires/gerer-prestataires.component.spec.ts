import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererPrestatairesComponent } from './gerer-prestataires.component';

describe('GererPrestatairesComponent', () => {
  let component: GererPrestatairesComponent;
  let fixture: ComponentFixture<GererPrestatairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererPrestatairesComponent]
    });
    fixture = TestBed.createComponent(GererPrestatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
