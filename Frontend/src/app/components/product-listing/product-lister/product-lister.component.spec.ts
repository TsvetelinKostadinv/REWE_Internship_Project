import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListerComponent } from './product-lister.component';

describe('ProductListerComponent', () => {
  let component: ProductListerComponent;
  let fixture: ComponentFixture<ProductListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
