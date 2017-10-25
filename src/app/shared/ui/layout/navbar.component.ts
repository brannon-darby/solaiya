import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light p-1">
    <div class="container">
      <a class="animated zoomIn navbar-brand" href="#">
      <img src="assets/solaiya.png"
           class="img-fluid logo">
      </a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              (click)="expanded = !expanded">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center"
           id="navbarNav"
           [class.show]="expanded">
        <div class="navbar-nav">
          <a *ngFor="let item of nav"
             class="nav-item nav-link"
             [routerLink]="item.link"
             routerLinkActive="active">{{ item.label }}
          </a>
        </div>
        <span class="social-buttons ml-auto">
          <a *ngFor="let item of socialButtons"
             [class]="item.class"
             [href]="item.link">
             <i [class]="item.icon"></i>
          </a>
        </span>
      </div>
    </div>
  </nav>
  `,
})
export class NavbarComponent implements OnInit {
  public expanded = false
  public nav = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Solutions', link: 'solutions' },
    { label: 'Markets', link: 'markets' },
    { label: 'Clients', link: 'clients' },
    { label: 'Why Solaiya?', link: 'why-solaiya' },
    { label: 'Contact Us', link: 'contact' },
  ]
  public socialButtons = [
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-facebook-official',
      class: 'btn btn-sm btn-info m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-twitter-square',
      class: 'btn btn-sm btn-info m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-linkedin-square',
      class: 'btn btn-sm btn-info m-1',
    },
  ]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(
      e => (e instanceof NavigationEnd ? (this.expanded = false) : ''),
    )
  }
}
