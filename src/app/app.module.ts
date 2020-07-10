import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TasksListsComponent } from './tasks-lists/tasks-lists.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

// import {MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; //for the form element
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import {
  // DateAdapter,
  // MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, TasksListsComponent, TaskDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSliderModule,
    DragDropModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'gb-GB' }],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent],
})
export class AppModule {}
