import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameListComponent } from './edit-name-list.component';

describe('EditNameListComponent', () => {
  let component: EditNameListComponent;
  let fixture: ComponentFixture<EditNameListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNameListComponent]
    });
    fixture = TestBed.createComponent(EditNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
