
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    {path: 'statistics', component: StatisticsComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StatisticRoutingModule {}

