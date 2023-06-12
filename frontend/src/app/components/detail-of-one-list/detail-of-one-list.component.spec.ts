import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfOneListComponent } from './detail-of-one-list.component';

describe('DetailOfOneListComponent', () => {
  let component: DetailOfOneListComponent;
  let fixture: ComponentFixture<DetailOfOneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOfOneListComponent]
    });
    fixture = TestBed.createComponent(DetailOfOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
