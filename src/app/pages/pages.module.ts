import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';


// modulos hechos 
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// componentes
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent  } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { PagesComponent     } from '../pages/pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent ,
    Graficas1Component,
    PagesComponent    
  ],
  exports:[
    DashboardComponent,
    ProgressComponent ,
    Graficas1Component,
    PagesComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
