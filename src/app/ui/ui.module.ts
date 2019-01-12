import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {OverviewComponent} from './overview/overview.component';
import {DataTableModule} from 'angular-6-datatable';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentEditComponent} from './student-edit/student-edit.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    NgbModule
  ],
  declarations: [LoginComponent, OverviewComponent, StudentEditComponent, StudentAddComponent, StudentDeleteComponent],
  providers: [NgbActiveModal],
  entryComponents: [StudentEditComponent, StudentAddComponent, StudentDeleteComponent]
})
export class UiModule { }
