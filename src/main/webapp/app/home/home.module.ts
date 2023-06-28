import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { QuiSuisJeComponent } from '../core/qui-suis-je/qui-suis-je.component';
import { GalerieComponent } from '../core/galerie/galerie.component';
import { ContactComponent } from '../core/contact/contact.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuiSuisJeLectureComponent } from '../core/qui-suis-je/qui-suis-je-lecture/qui-suis-je-lecture.component';
import { QuiSuisJeEcritureComponent } from '../core/qui-suis-je/qui-suis-je-ecriture/qui-suis-je-ecriture.component';
import { SafeHtmlPipe } from '../shared/pipe/safe-html.pipe';
import { DragDirective } from '../shared/directive/drag.directive';
import { AppModule } from '../app.module';
import { UploadImagesComponent } from '../core/upload-images/upload-images.component';
import { UploadAndDisplayComponent } from '../core/upload-and-display/upload-and-display.component';
import { DisplayImagesComponent } from '../core/display-images/display-images.component';

@NgModule({
  imports: [SharedModule, CKEditorModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [
    HomeComponent,
    QuiSuisJeComponent,
    GalerieComponent,
    ContactComponent,
    QuiSuisJeLectureComponent,
    QuiSuisJeEcritureComponent,
    UploadImagesComponent,
    SafeHtmlPipe,
    DragDirective,
    UploadAndDisplayComponent,
    DisplayImagesComponent,
  ],
  exports: [DragDirective, UploadImagesComponent],
})
export class HomeModule {}
