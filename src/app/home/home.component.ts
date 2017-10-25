import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'home',
  template: `
  <h3>{{ message }}</h3>
  <div class="card w-100 mb-3">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
      <p class="card-text">content</p>
    </div>
  </div>
  <ngb-carousel>
    <ng-template ngbSlide *ngFor="let slide of slides">
      <div class="container">
        <img class="mx-auto d-block w-50 bg-light p-1"
             style="opacity: 0.7;"
             [src]="slide.bg">
        <div class="carousel-caption">
          <h3>{{ slide.label }}</h3>
          <p>{{ slide.caption }}</p>
        </div>
      </div>
    </ng-template>
  </ngb-carousel>
  `,
})
export class HomeComponent implements OnInit {
  public message: string
  public slides = [
    { bg: 'assets/cyber.jpg', label: 'Label', caption: 'Caption' },
    { bg: 'assets/cyber.jpg', label: '2', caption: 'Caption' },
    { bg: 'assets/cyber.jpg', label: '3', caption: 'Caption' },
  ]

  constructor() {}

  ngOnInit() {
    this.message = 'Home'
  }
}
