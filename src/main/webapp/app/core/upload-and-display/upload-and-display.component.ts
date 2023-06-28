import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileHandle } from '../../entities/fileHandle';
import { DomSanitizer } from '@angular/platform-browser';
import { EditModeService } from '../update-mode/edit-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jhi-upload-and-display',
  templateUrl: './upload-and-display.component.html',
  styleUrls: ['./upload-and-display.component.scss'],
})
export class UploadAndDisplayComponent implements OnInit, OnChanges {
  @Input()
  filesHandle: FileHandle[];
  @Input()
  singleMode: boolean;
  isEditMode: Observable<boolean>;

  constructor(private sanitizer: DomSanitizer, private editModeService: EditModeService) {}

  ngOnInit(): void {
    this.isEditMode = this.editModeService.isEditMode$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    console.log('changed' + changes);
  }

  onFileUploaded($event: File): any {
    if (this.singleMode) {
      this.filesHandle = [];
    }
    this.filesHandle.push({
      file: $event,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL($event)),
    });
  }
}
