import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadImagesComponent } from './lazyload-images.component';

describe('LazyloadImagesComponent', () => {
  let component: LazyloadImagesComponent;
  let fixture: ComponentFixture<LazyloadImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
