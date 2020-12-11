import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiElementsModule } from './ui-elements/ui-elements.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
