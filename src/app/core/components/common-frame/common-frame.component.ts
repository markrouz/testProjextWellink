import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-frame',
  templateUrl: './common-frame.component.html',
  styleUrls: ['./common-frame.component.scss'],
})
// todo надо чтобы скрол не появлялся на боковой панели
export class CommonFrameComponent implements OnInit {

  sidebarHeaders = [
    {
      header: 'Monitoring',
      links: [
        { name: 'Analytics', path: '../analytics', icon: 'src/assets/sidebar/dashboard.png' },
        { name: 'Map', path: '../map', icon: 'src/assets/sidebar/map.png' },
        { name: 'Events', path: '../events', icon: 'src/assets/sidebar/developments.png' },
      ],
    },
    {
      header: 'Reports',
      links: [
        { name: 'Reports SLA', path: '../reports-sla', icon: 'src/assets/sidebar/SLA-reports.png' },
      ],
    },
    {
      header: 'Infrastructure',
      links: [
        { name: 'Services', path: '../services', icon: 'src/assets/sidebar/services.png' },
        { name: 'Contracts', path: '../contracts', icon: 'src/assets/sidebar/contracts.png' },
        { name: 'Probes', path: '../probes', icon: 'src/assets/sidebar/probes.png' },
      ],
    },
    {
      header: 'Administration',
      links: [
        { name: 'Contractors', path: '../contractors', icon: 'src/assets/sidebar/contractors.png' },
        { name: 'SLA', path: '../sla', icon: 'src/assets/sidebar/SLA.png' },
        { name: 'SAP', path: '../sap', icon: 'src/assets/sidebar/access-point.png' },
        { name: 'Tests', path: '../tests', icon: 'src/assets/sidebar/tests.png' },
        { name: 'Accounts', path: '../accounts', icon: 'src/assets/sidebar/accounts.png' },
        { name: 'Sessions', path: '../sessions', icon: 'src/assets/sidebar/session.png' },
        { name: 'Event log', path: '../event-log', icon: 'src/assets/sidebar/event-log.png' },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
