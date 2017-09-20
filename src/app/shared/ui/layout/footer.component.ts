import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-footer',
  template: `
    <div class="bg-warning container-fluid">
      <div class="container py-2">
        <div class="row">
          <div class="col-lg-6">
            <h5>SOLUTIONS</h5>
            <hr class="my-2">
            <h6>Consulting</h6>
            <ul>
              <li><a routerLink="solutions">Business Development</a></li>
              <li><a routerLink="solutions">Business Process and Operations Support</a></li>
            </ul>
            <h6>Systems</h6>
            <ul>
              <li><a routerLink="solutions">Cyber Security</a></li>
              <li><a routerLink="solutions">Knowledge Management and Analytics</a></li>
              <li><a routerLink="solutions">IoT Connected Solutions</a></li>
            </ul>
            <h6>Talent</h6>
            <ul>
              <li><a routerLink="solutions">Subject Matter Expertise</a></li>
              <li><a routerLink="solutions">Supplemental Staffing</a></li>
              <li><a routerLink="solutions">Personnel Training and Certification</a></li>
            </ul>
          </div>
          <div class="col-lg-6">
            <h5>CONTACT INFORMATION</h5>
            <hr class="my-2">
            <div class="text-left row">
              <div class="col-3">
                <i class="fa fa-fw fa-map-marker"></i>
              </div>
              <div class="col-9">
                664 A South Military Trail
                <br>
                Deerfield Beach, FL 33442
              </div>
              <div class="col-3">
                <i class="fa fa-fw fa-phone"></i>
              </div>
              <div class="col-9">1-954-725-7544</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer container">
      <div class="row align-items-center">
        <div class="col text-center">
          &copy; 2017 Solaiya | All Rights Reserved
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    h5 {
      text-align: center;
    }
    h6 {
      margin-bottom: 0;
    }
    ul {
      margin-bottom: 0;
    }
  `,
  ],
})
export class FooterComponent {}
