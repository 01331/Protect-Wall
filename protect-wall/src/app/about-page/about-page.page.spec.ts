import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPagePage } from './about-page.page';

describe('AboutPagePage', () => {
  let component: AboutPagePage;
  let fixture: ComponentFixture<AboutPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
