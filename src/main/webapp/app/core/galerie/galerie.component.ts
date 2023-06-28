import { Component, Input, OnInit } from '@angular/core';
import { FileHandle } from '../../entities/fileHandle';

@Component({
  selector: 'jhi-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent implements OnInit {
  titi;
  @Input()
  files: FileHandle[] = [];

  constructor() {
    this.titi = 3;
  }

  ngOnInit(): void {
    this.titi = 8;
  }
}
