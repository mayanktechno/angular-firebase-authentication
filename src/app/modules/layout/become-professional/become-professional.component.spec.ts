import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeProfessionalComponent } from './become-professional.component';

describe('BecomeProfessionalComponent', () => {
  let component: BecomeProfessionalComponent;
  let fixture: ComponentFixture<BecomeProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
