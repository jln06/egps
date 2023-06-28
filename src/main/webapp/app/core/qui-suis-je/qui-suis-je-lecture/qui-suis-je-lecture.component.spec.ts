import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJeLectureComponent } from './qui-suis-je-lecture.component';

describe('QuiSuisJeLectureComponent', () => {
  let component: QuiSuisJeLectureComponent;
  let fixture: ComponentFixture<QuiSuisJeLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuiSuisJeLectureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSuisJeLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
