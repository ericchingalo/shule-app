import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolsByNameComponent } from './schools-by-name/schools-by-name.component';
import { SchoolsByCategoryComponent } from './schools-by-category/schools-by-category.component';
import { SchoolComponent } from './shared/school/school.component';
import { SchoolRoutingModule } from './schools.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SchoolsComponent, SchoolsByNameComponent, SchoolsByCategoryComponent, SchoolComponent],
  imports: [
    CommonModule, SchoolRoutingModule
  ]
})
export class SchoolsModule { }
