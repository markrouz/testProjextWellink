import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
         MatCheckboxModule,
         MatIconModule,
         MatListModule,
         MatSidenavModule,
       } from '@angular/material';
import { CommonFrameComponent } from 'src/app/core/components/common-frame/common-frame.component';
import { ListPageComponent } from 'src/app/core/components/services-list-page/list-page.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { MapStubComponent } from './components/stubs/map-stub/map-stub.component';
import { AnalyticsStubComponent } from './components/stubs/analytics-stub/analytics-stub.component';
import { EventsStubComponent } from './components/stubs/events-stub/events-stub.component';
import { ContractsStubComponent } from './components/stubs/contracts-stub/contracts-stub.component';
import { ProbesStubComponent } from './components/stubs/probes-stub/probes-stub.component';
import { ContractorsStubComponent } from './components/stubs/contractors-stub/contractors-stub.component';
import { SlaStubComponent } from './components/stubs/sla-stub/sla-stub.component';
import { SapStubComponent } from './components/stubs/sap-stub/sap-stub.component';
import { TestsStubComponent } from './components/stubs/tests-stub/tests-stub.component';
import { AccountsStubComponent } from './components/stubs/accounts-stub/accounts-stub.component';
import { SessionsStubComponent } from './components/stubs/sessions-stub/sessions-stub.component';
import { EventLogStubComponent } from './components/stubs/event-log-stub/event-log-stub.component';
import { ReportsSlaStubComponent } from './components/stubs/reports-sla-stub/reports-sla-stub.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: [
    CommonFrameComponent,
    ListPageComponent,
    MapStubComponent,
    AnalyticsStubComponent,
    EventsStubComponent,
    ContractsStubComponent,
    ProbesStubComponent,
    ContractorsStubComponent,
    SlaStubComponent,
    SapStubComponent,
    TestsStubComponent,
    AccountsStubComponent,
    SessionsStubComponent,
    EventLogStubComponent,
    ReportsSlaStubComponent,
  ],
  providers: [],
})
export class CoreModule { }
