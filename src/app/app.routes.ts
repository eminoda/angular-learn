import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}, {
    // 这是异步加载的方式
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
}];
