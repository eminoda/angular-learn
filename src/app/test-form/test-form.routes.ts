import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidatorFormComponent } from './validator-form/validator-form.component';
import { TemplateDirvenFormComponent } from './template-dirven-form/template-dirven-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TestFormComponent } from './test-form.component';
import { Routes } from '@angular/router';

export const testFormRoutes: Routes = [{
    path: '',
    component: TestFormComponent,
    children: [{
        path: '',
        redirectTo: 'reactive',
        pathMatch: 'full'
    }, {
        path: 'basic',
        component: BasicFormComponent
    }, {
        path: 'template',
        component: TemplateDirvenFormComponent
    }, {
        path: 'validator',
        component: ValidatorFormComponent
    }, {
        path: 'reactive',
        component: ReactiveFormComponent
    }, {
        path: 'dynamic',
        component: DynamicFormComponent
    }]
}];
