import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocklistPage } from './blocklist.page';

describe('BlocklistPage', () => {
  let component: BlocklistPage;
  let fixture: ComponentFixture<BlocklistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlocklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
