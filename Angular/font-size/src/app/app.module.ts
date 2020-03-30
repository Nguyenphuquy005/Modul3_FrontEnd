import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NameCartComponent } from './name-cart/name-cart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        FontSizeEditorComponent,
        PetComponent,
        CaculatorComponent,
        ColorPickerComponent,
        NameCartComponent,
        ProgressBarComponent,
        RatingBarComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
