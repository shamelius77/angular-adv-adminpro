import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent      } from '../shared/header/header.component';
import { SidebarComponent     } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    HeaderComponent  ,   
    SidebarComponent ,   
    BreadcrumbsComponent
  ],
  exports:[
    HeaderComponent  ,   
    SidebarComponent ,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
