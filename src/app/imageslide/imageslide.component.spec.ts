import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslideComponent } from './imageslide.component';

describe('ImageslideComponent', () => {
  let component: ImageslideComponent;
  let fixture: ComponentFixture<ImageslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageslideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
