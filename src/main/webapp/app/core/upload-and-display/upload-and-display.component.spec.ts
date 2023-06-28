import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAndDisplayComponent } from './upload-and-display.component';

describe('UploadAndDisplayComponent', () => {
  let component: UploadAndDisplayComponent;
  let fixture: ComponentFixture<UploadAndDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadAndDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAndDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
