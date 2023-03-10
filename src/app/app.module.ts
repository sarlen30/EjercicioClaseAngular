import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import { DialogComponent } from './pages/dialog/dialog/dialog.component';
import {MatButtonModule} from "@angular/material/button";
import { BasicDialogComponent } from './pages/dialog/basic-dialog/basic-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogWithDataComponent } from './pages/dialog/dialog-with-data/dialog-with-data.component';
import { PipesComponent } from './pages/pipes/pipes.component';

import LocaleES from '@angular/common/locales/es'

import {DatePipe, registerLocaleData} from "@angular/common";
import { PersolanizadaPipe } from './pages/pipes/persolanizada.pipe';
import { ArticuloDetailComponent } from './pages/articulo-detail/articulo-detail.component';

registerLocaleData(LocaleES, 'es')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticulosComponent,
    NotfoundComponent,
    DialogComponent,
    BasicDialogComponent,
    DialogWithDataComponent,
    PipesComponent,
    PersolanizadaPipe,
    ArticuloDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    //Inyectamos el locale
    {provide: LOCALE_ID, useValue: 'es'},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
