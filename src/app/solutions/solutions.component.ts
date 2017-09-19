import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'solutions',
  template: `<h3>{{ message }}</h3>`,
})
export class SolutionsComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'Solutions'
  }
}
