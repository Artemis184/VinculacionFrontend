import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAlarmasPage } from './admin-alarmas.page';

describe('AdminAlarmasPage', () => {
  let component: AdminAlarmasPage;
  let fixture: ComponentFixture<AdminAlarmasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlarmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
