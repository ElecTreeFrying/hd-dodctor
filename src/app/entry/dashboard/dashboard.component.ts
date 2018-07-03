import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabLinks = [
    { label: 'Patient\'s Messages', link: 'message' },
    { label: 'Patient Readings', link: 'readings' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['/', 'u', 'readings']);
  }

}
