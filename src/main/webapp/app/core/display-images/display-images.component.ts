import { Component, Input, OnInit } from '@angular/core';
import { FileHandle } from '../../entities/fileHandle';

@Component({
  selector: 'jhi-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.scss'],
})
export class DisplayImagesComponent implements OnInit {
  @Input()
  filesHandle: FileHandle[];
  @Input()
  onlyRead: boolean;

  constructor() {}

  ngOnInit(): void {}

  deleteImage(file: File): void {
    const index = this.filesHandle.findIndex(f => f.file === file);
    this.filesHandle.splice(index, 1);
  }
}
