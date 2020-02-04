import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridimageComponent } from './gridimage.component';

describe('GridimageComponent', () => {
  let component: GridimageComponent;
  let fixture: ComponentFixture<GridimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
