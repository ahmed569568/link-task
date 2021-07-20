import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { BurgerButtonComponent } from './burger-button/burger-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, BurgerButtonComponent],
  exports: [LoaderComponent, BurgerButtonComponent],
})
export class SharedModule {}
