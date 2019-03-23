import { PingService } from './../core/services/ping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent implements OnInit {
  ping: any;

  constructor(
    private pingService: PingService
  ) { }

  ngOnInit() {
    this.pingService.getPing().subscribe((res) => this.ping = res);
  }

}
