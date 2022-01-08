import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LinesComponent } from './components/lines/lines.component';

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
