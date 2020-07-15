
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
   
    { path: '', pathMatch:'full', redirectTo: '/dashboard' },
    { path: '**', component: NopagefoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {useHash: true}),
        PagesRoutingModule,
        AuthRoutingModule
    ]
})
export class AppRoutingModule {}

// export const appRouting = RouterModule.forRoot(routes, {useHash: true});