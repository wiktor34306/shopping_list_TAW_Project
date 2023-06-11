import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToListComponent } from './add-item-to-list.component';

describe('AddItemToListComponent', () => {
  let component: AddItemToListComponent;
  let fixture: ComponentFixture<AddItemToListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemToListComponent]
    });
    fixture = TestBed.createComponent(AddItemToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
