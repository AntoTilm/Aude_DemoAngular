import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
