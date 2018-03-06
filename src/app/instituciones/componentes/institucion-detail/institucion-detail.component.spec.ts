import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionDetailComponent } from './institucion-detail.component';

describe('InstitucionDetailComponent', () => {
  let component: InstitucionDetailComponent;
  let fixture: ComponentFixture<InstitucionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
