import { Component, OnInit } from '@angular/core';
import { IQuiSuisJe, QuiSuisJe } from '../../entities/user/quiSuisJe.model';
import { Observable } from 'rxjs';
import { EditModeService } from '../update-mode/edit-mode.service';

@Component({
  selector: 'jhi-qui-suis-je',
  templateUrl: './qui-suis-je.component.html',
  styleUrls: ['./qui-suis-je.component.scss'],
})
export class QuiSuisJeComponent implements OnInit {
  quiSuisJe: IQuiSuisJe;
  isEditMode: Observable<boolean>;

  constructor(private editModeService: EditModeService) {}

  ngOnInit(): void {
    this.isEditMode = this.editModeService.isEditMode$;
    this.quiSuisJe = {
      titre: 'hello',
      sousTitre: 'sous titre',
      description: "c'est une description",
      telephone: '061945924',
    };
  }

  onChangeQuiSuisJe(data: IQuiSuisJe): void {
    this.quiSuisJe = data;
  }
}
