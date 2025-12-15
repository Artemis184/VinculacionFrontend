import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDetallePage } from './admin-detalle.page';

describe('AdminDetallePage', () => {
  let component: AdminDetallePage;
  let fixture: ComponentFixture<AdminDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
