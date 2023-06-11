import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfDeletedItemsComponent } from './history-of-deleted-items.component';

describe('HistoryOfDeletedItemsComponent', () => {
  let component: HistoryOfDeletedItemsComponent;
  let fixture: ComponentFixture<HistoryOfDeletedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryOfDeletedItemsComponent]
    });
    fixture = TestBed.createComponent(HistoryOfDeletedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
