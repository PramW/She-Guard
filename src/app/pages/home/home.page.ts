import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular/standalone';
import { SwiperDirective } from 'src/app/directives/swiper.directive.spec';
import { BannerComponent } from 'src/app/components/banner/banner.component';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SwiperDirective,
    BannerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];

  slides: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        banner: 'assets/images/home/carousel/1.png',
      },
      {
        banner: 'assets/images/home/carousel/2.png',
      },
      {
        banner: 'assets/images/home/carousel/3.png',
      },
      {
        banner: 'assets/images/home/carousel/4.png',
      },
    ];
  }
}
