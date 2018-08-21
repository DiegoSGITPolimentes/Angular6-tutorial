import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowsNewServer = false;
  serverCreationStatus = 'server is not created yet!';
  serverName = 'algo';
  username = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowsNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server is created name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onResetButton() {
    this.username = '';
  }

}
