import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './number.directive';
import { WhiteSpaceDirective } from './white-space.directive';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';



@NgModule({
  declarations: [NumberDirective,WhiteSpaceDirective, BlockCopyPasteDirective],
  imports: [
    CommonModule,
    
  ],
  exports: [NumberDirective,WhiteSpaceDirective , BlockCopyPasteDirective]
})
export class SharedModule { }
