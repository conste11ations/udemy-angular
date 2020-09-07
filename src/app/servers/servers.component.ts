import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // tslint:disable-next-line: component-selector
  // selector: '[app-servers]',
  // tslint:disable-next-line: component-selector
  // selector: '.app-servers',
  // template: `<app-server></app-server><app-server></app-server
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'test-server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer(): void {
    this.serverCreationStatus = 'server created! Name is: ' + this.serverName;
  }
  onUpdateServerName(event: any): void {
    // console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
