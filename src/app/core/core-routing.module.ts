import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/authentication/components/login/login.component';
import { EntitySelectedComponent } from '@app/core/components/entity-selected/entity-selected.component';
import { ListPageComponent } from '@app/core/components/services-list-page/list-page.component';
import { AccountsStubComponent } from '@app/core/components/stubs/accounts-stub/accounts-stub.component';
import { AnalyticsStubComponent } from '@app/core/components/stubs/analytics-stub/analytics-stub.component';
import { ContractsStubComponent } from '@app/core/components/stubs/contracts-stub/contracts-stub.component';
import { EventLogStubComponent } from '@app/core/components/stubs/event-log-stub/event-log-stub.component';
import { EventsStubComponent } from '@app/core/components/stubs/events-stub/events-stub.component';
import { MapStubComponent } from '@app/core/components/stubs/map-stub/map-stub.component';
import { ProbesStubComponent } from '@app/core/components/stubs/probes-stub/probes-stub.component';
import { ReportsSlaStubComponent } from '@app/core/components/stubs/reports-sla-stub/reports-sla-stub.component';
import { SapStubComponent } from '@app/core/components/stubs/sap-stub/sap-stub.component';
import { SessionsStubComponent } from '@app/core/components/stubs/sessions-stub/sessions-stub.component';
import { SlaStubComponent } from '@app/core/components/stubs/sla-stub/sla-stub.component';
import { TestsStubComponent } from '@app/core/components/stubs/tests-stub/tests-stub.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'services',
  },
  {
    path: 'services',
    component: ListPageComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsStubComponent,
  },
  {
    path: 'map',
    component: MapStubComponent,
  },
  {
    path: 'events',
    component: EventsStubComponent,
  },
  {
    path: 'reports-sla',
    component: ReportsSlaStubComponent,
  },
  {
    path: 'contracts',
    component: ContractsStubComponent,
  },
  {
    path: 'probes',
    component: ProbesStubComponent,
  },
  {
    path: 'contractors',
    component: ContractsStubComponent,
  },
  {
    path: 'sla',
    component: SlaStubComponent,
  },
  {
    path: 'sap',
    component: SapStubComponent,
  },
  {
    path: 'tests',
    component: TestsStubComponent,
  },
  {
    path: 'accounts',
    component: AccountsStubComponent,
  },
  {
    path: 'sessions',
    component: SessionsStubComponent,
  },
  {
    path: 'event-log',
    component: EventLogStubComponent,
  },
  {
    path: 'edit-entity',
    component: EntitySelectedComponent,
  },
  {
    path: '**',
    redirectTo: 'services',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]})
export class CoreRoutingModule { }
