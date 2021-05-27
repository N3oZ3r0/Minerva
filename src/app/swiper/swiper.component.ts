import { Component, ViewEncapsulation, OnInit } from '@angular/core';


import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
