import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [CardComponent, NavbarComponent],
  imports: [CommonModule, UiElementsRoutingModule],
  exports: [NavbarComponent, CardComponent],
})
export class UiElementsModule {}
