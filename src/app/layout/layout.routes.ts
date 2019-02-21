import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,

        children: [
            {path: '', redirectTo: 'dashboards', pathMatch: 'full'},
            //---------------------------------------------------------->
            //Dashboards
            //---------------------------------------------------------->
            {
                path: 'dashboards',
                loadChildren: '../pages/dashboards/dashboards.module#DashboardsModule',
            },
        ]
    },

    // 404 Page Not Found
    {path: '**', redirectTo: ''}
];
export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
