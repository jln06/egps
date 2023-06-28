import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { IQuiSuisJe } from '../../../entities/user/quiSuisJe.model';
import { FileHandle } from '../../../entities/fileHandle';
import { DomSanitizer } from '@angular/platform-browser';
import { EditModeService } from '../../update-mode/edit-mode.service';

@Component({
  selector: 'jhi-qui-suis-je-ecriture',
  templateUrl: './qui-suis-je-ecriture.component.html',
  styleUrls: ['./qui-suis-je-ecriture.component.scss'],
})
export class QuiSuisJeEcritureComponent implements OnInit {
  @Input()
  quiSuije: IQuiSuisJe;

  @Output()
  formChange = new EventEmitter();
  files: FileHandle[] = [];

  Editor = DecoupledEditor;

  formQuiSuije: FormGroup;

  constructor(private fb: FormBuilder, private editModeService: EditModeService) {}

  onReady(editor: any): void {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands

    console.log('cekeditor ready : ');
    editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }

  buildForm(): void {
    this.formQuiSuije = this.fb.group({
      titre: ['', Validators.required],
      sousTitre: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  patchValues(): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.quiSuije !== undefined) {
      this.formQuiSuije.patchValue(this.quiSuije);
    }
  }

  ngOnInit(): void {
    this.buildForm();
    this.patchValues();
  }

  onSubmit(): void {
    // eslint-disable-next-line no-console
    console.log('Form submit, model', this.formQuiSuije.value);
    this.formChange.emit(this.formQuiSuije.value);
    this.editModeService.setUpdateMode(false);
  }

  get photoForm(): AbstractControl | null {
    return this.formQuiSuije.get('photo');
  }
}
