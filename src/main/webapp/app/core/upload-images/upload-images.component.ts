import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'jhi-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent implements OnInit {
  @Output() fileUploaded: EventEmitter<File> = new EventEmitter<File>();
  @Input()
  singleMode: boolean;

  constructor() {}

  ngOnInit(): void {}

  processUploadFile(event): void {
    const files = event.target.files;
    if (files.length > 0) {
      if (!this.singleMode) {
        Array.from(files as File[]).forEach(f => this.fileUploaded.emit(f));
      } else {
        this.fileUploaded.emit(files[0]);
      }
    }
  }

  fileDropped(event: File): any {
    this.fileUploaded.emit(event);
  }
}
