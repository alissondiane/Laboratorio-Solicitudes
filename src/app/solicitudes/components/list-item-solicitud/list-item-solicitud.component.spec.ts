import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSolicitudComponent } from './list-item-solicitud.component';

describe('ListItemSolicitudComponent', () => {
  let component: ListItemSolicitudComponent;
  let fixture: ComponentFixture<ListItemSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
