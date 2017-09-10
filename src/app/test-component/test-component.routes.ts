import { TestComponentComponent } from './test-component.component';
import { Routes } from '@angular/router';
import { TestCommunicationComponent } from './test-communication/test-communication.component';
import { TestLifeComponent } from './test-life/test-life.component';
import { TestTemplateComponent } from './test-template/test-template.component';
export const testComponentRoutes: Routes = [{
    path: '',
    component: TestComponentComponent,
    children: [{
        path: '',
        redirectTo: 'template',
        pathMatch: 'full'
    }, {
        path: 'template',
        component: TestTemplateComponent
    }, {
        path: 'life',
        component: TestLifeComponent
    }, {
        path: 'communication',
        component: TestCommunicationComponent
    }]
}];

