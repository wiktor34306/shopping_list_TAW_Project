import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfOneListComponent } from './details-of-one-list.component';

describe('DetailsOfOneListComponent', () => {
  let component: DetailsOfOneListComponent;
  let fixture: ComponentFixture<DetailsOfOneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOfOneListComponent]
    });
    fixture = TestBed.createComponent(DetailsOfOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
