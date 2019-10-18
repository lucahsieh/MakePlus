import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule }    from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';


import { ProjectViewComponent } from './project-view/project-view.component';

import { HttpClientModule } from '@angular/common/http';
import { WorkloadViewComponent } from './workload-view/workload-view.component';
import { HighlevelViewComponent } from './highlevel-view/highlevel-view.component';
import { CalendarComponent } from './project-view/componentes/calendar/calendar.component';
import { InvoiceComponent } from './project-view/componentes/invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidenavComponent,
    ProjectViewComponent,
    WorkloadViewComponent,
    HighlevelViewComponent,
    CalendarComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
