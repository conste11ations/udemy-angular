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
  serverCreated = false;
  servers = ['TestServer', 'AnotherServer'];

  serversDetails = 'here are the details';
  showServerDetails = false;
  detailsButtonClicks = [];

  username = '';
  usernameCreationStatus = 'no username created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created! Name is: ' + this.serverName;
  }
  onUpdateServerName(event: any): void {
    // console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (event.target as HTMLInputElement).value;
  }
  setUsername(input: any): void {
    this.username = input;
  }
  onCreateUsername(): void {
    this.usernameCreationStatus =
      'username created! Username is: ' + this.username;
    this.setUsername('');
  }
  onUsernameCheck(input: any): boolean {
    return input.length === 0;
  }
  showDetails(): void {
    this.detailsButtonClicks.push(new Date());
    this.showServerDetails = !this.showServerDetails;
  }
}
