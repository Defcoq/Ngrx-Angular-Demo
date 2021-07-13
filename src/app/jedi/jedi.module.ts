import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    JediListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [JediListComponent]
})
export class JediModule { }
