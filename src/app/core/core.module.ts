import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatToolbarModule, MatButtonModule, MatInputModule, MatSelectModule, MatTableModule, MatSortModule, MatExpansionModule,
  MatBadgeModule, MatRadioModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatCardModule,
} from '@angular/material';
import { CommonFrameComponent } from '@app/core/components/common-frame/common-frame.component';
import { ListPageComponent } from '@app/core/components/services-list-page/list-page.component';
import { CoreRoutingModule } from '@app/core/core-routing.module';
import { metaReducers, reducers } from '@app/core/store/reducers';
import { StoreModule } from '@ngrx/store';
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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntitySelectedComponent } from './components/entity-selected/entity-selected.component';
import { EntityToolbarComponent } from './components/entity-toolbar/entity-toolbar.component';

const MATERIAL_MODULES = [
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatExpansionModule,
  MatBadgeModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule, // todo хотелось бы, чтобы FormsModule импортировался только в app.module.ts
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  declarations: [
    CommonFrameComponent,
    ListPageComponent,
    ToolbarComponent,
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
    ToolbarComponent,
    EntityListComponent,
    EntitySelectedComponent,
    EntityToolbarComponent,
  ],
  providers: [],
})
export class CoreModule { }
