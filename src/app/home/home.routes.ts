import { TestFormComponent } from './../test-form/test-form.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
export const homeRoutes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [{
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    }, {
        path: 'component',
        loadChildren: '../test-component/test-component.module#TestComponentModule'
    }, {
        path: 'form',
        loadChildren: '../test-form/test-form.module#TestFormModule'
    }]
}];
