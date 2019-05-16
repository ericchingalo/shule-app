import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticRoutingModule } from './statistics.routing.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ]
})
export class StatisticsModule { }
