import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'home',
  template: `
  <h3>{{ message }}</h3>
  <div class="card w-100 mb-3">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <hr />
      <h6 class="card-subtitle mb-2 text-muted">subtitle</h6>
      <p class="card-text">content</p>
    </div>
  </div>

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
