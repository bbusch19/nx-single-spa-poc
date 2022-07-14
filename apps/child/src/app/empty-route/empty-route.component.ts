import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-empty-route',
  template: '<h1>Page not Found</h1>',
})
export class EmptyRouteComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
