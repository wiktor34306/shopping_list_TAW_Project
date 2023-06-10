import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfOneProductComponent } from './detail-of-one-product.component';

describe('DetailOfOneProductComponent', () => {
  let component: DetailOfOneProductComponent;
  let fixture: ComponentFixture<DetailOfOneProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOfOneProductComponent]
    });
    fixture = TestBed.createComponent(DetailOfOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
