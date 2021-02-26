import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule, CdkScrollableModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    ScrollingModule,
    CdkScrollableModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    ScrollingModule,
    CdkScrollableModule
  ]
})
export class MaterialModule { }
