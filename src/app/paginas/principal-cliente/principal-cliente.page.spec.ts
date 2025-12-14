import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalClientePage } from './principal-cliente.page';

describe('PrincipalClientePage', () => {
  let component: PrincipalClientePage;
  let fixture: ComponentFixture<PrincipalClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
