import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Scrollbar, Mousewheel } from "swiper/core";


SwiperCore.use([Scrollbar, Mousewheel]);

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
