import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsLazyloadImagesComponent } from './vs-lazyload-images.component';

describe('VsLazyloadImagesComponent', () => {
  let component: VsLazyloadImagesComponent;
  let fixture: ComponentFixture<VsLazyloadImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsLazyloadImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsLazyloadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
