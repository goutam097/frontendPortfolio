import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPersonalDetailsCreatePage } from './admin-personal-details-create.page';

describe('AdminPersonalDetailsCreatePage', () => {
  let component: AdminPersonalDetailsCreatePage;
  let fixture: ComponentFixture<AdminPersonalDetailsCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminPersonalDetailsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
