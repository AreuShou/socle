import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererCommentairesComponent } from './gerer-commentaires.component';

describe('GererCommentairesComponent', () => {
  let component: GererCommentairesComponent;
  let fixture: ComponentFixture<GererCommentairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererCommentairesComponent]
    });
    fixture = TestBed.createComponent(GererCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
