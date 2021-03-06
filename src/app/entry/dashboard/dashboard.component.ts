import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SetTimeEventService } from '../../common/core/service/set-time-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabLinks = [];
  links = [
    { label: 'Patient\'s Messages', link: 'message' },
    { label: 'Patient Readings', link: 'readings' },
    { label: 'Patient Readings', link: ['/', 'u'] }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private setTimeEventService: SetTimeEventService
  ) { }

  ngOnInit() {
    this.tabLinks = this.links.filter(e => e.link !== 'readings');

    this.setTimeEventService.setTimeEventHandler();
  }

  onClick(index: number) {
    index === 1 ? this.router.navigate(['readings'], { relativeTo: this.route }) : 0;
    this.tabLinks = this.links.filter(e => typeof e.link !== 'object');
  }

}
