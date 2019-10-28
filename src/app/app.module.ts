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
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {PickListModule} from 'primeng/picklist';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';




import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

import {CheckboxModule} from 'primeng/checkbox';

import { ProjectViewComponent } from './project-view/project-view.component';

import { HttpClientModule } from '@angular/common/http';
import { WorkloadViewComponent } from './workload-view/workload-view.component';
import { HighlevelViewComponent } from './highlevel-view/highlevel-view.component';
import { CalendarComponent } from './project-view/componentes/calendar/calendar.component';
import { InvoiceComponent } from './project-view/componentes/invoice/invoice.component';
import { ProjectEditComponent } from './project-view/project-edit/project-edit.component';
import { MatNativeDateModule } from '@angular/material/core';
import { OverviewComponent } from './project-view/componentes/overview/overview.component';
import { WorkloadComponent } from './project-view/componentes/workload/workload.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidenavComponent,
    ProjectViewComponent,
    WorkloadViewComponent,
    HighlevelViewComponent,
    CalendarComponent,
    InvoiceComponent,
    ProjectEditComponent,
    OverviewComponent,
    WorkloadComponent,
  ],
  imports: [
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    TableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    CalendarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CheckboxModule,
    PickListModule,MultiSelectModule,DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
