import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './views/list-card/list-card.component';
import { CardComponent } from './views/card/card.component';
import { ShareDialogComponent } from './views/share-dialog/share-dialog.component';
import {MatDialogModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './views/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    CardComponent,
    ShareDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [ShareDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
