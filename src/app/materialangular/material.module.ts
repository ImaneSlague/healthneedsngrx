import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule, MatCellDef } from '@angular/material/table';

import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatStepperModule } from '@angular/material/stepper';




import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';


const Materiallist = [    
  BrowserAnimationsModule,   
  MatFormFieldModule,  
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
 
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  
  MatRippleModule,
  MatSelectModule,

  MatSnackBarModule,
  MatSortModule,  
  MatTableModule,

  MatToolbarModule,
 
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,

  MatBottomSheetModule,
  MatButtonModule,
 
  MatCardModule,

  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
 
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
 
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,

  MatRippleModule,
  MatSelectModule,
 
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,

  MatToolbarModule,

  PortalModule,
  ScrollingModule,
]


  



@NgModule({
  declarations: [

  ],
  imports: [
    Materiallist,  
  ],
  exports: [
    Materiallist, 
  ],
  providers: [{ provide: MatBottomSheetRef, useValue: {} },
  { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }],
})
export class AngularMaterialModule { }


