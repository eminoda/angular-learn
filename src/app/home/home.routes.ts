import { TestFormComponent } from './../test-form/test-form.component';
import { TestComponentComponent } from './../test-component/test-component.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
export const homeRoutes: Routes = [{
    path: '',
    component: HomeComponent
}, {
    path: 'testComponent',
    component: TestComponentComponent
}, {
    path: 'testForm',
    component: TestFormComponent
}];
