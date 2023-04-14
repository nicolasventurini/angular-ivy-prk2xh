import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottoComponent } from './prodotti/prodotti.component';
import { COnvertToSpacePipe } from './condivisa/convert-to-space';
import { StellaComponent } from './condivisa/stella.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProdottoComponent,
    COnvertToSpacePipe,
    StellaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
