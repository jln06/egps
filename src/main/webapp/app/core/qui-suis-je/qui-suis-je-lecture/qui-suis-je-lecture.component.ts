import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IQuiSuisJe } from '../../../entities/user/quiSuisJe.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'jhi-qui-suis-je-lecture',
  templateUrl: './qui-suis-je-lecture.component.html',
  styleUrls: ['./qui-suis-je-lecture.component.scss'],
})
export class QuiSuisJeLectureComponent implements OnInit, OnChanges {
  @Input()
  quiSuije: IQuiSuisJe;
  preview = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChanges');
    if (this.quiSuije.photo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      };
      reader.readAsDataURL(this.quiSuije.photo);
    }
  }
}
