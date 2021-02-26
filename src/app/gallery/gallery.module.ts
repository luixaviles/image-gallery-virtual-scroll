import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GalleryModule { }
