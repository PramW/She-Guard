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

  // public config: SwiperOptions = {
  //   modules: [Pagination, Navigation],
  //   navigation: false,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  //   slidesPerView: 1,
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   centeredSlides: true,
  //   effect: 'fade',
  // };

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        banner: 'assets/images/forgot-password/forgotp.png',
      },
      { banner: 'assets/images/verification-email/email.png' },
      { banner: 'assets/images/new-password/np.png' },
    ];
  }
}
