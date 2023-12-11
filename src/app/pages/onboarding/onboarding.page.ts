import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular/standalone';
import { SwiperDirective } from 'src/app/directives/swiper.directive.spec';
import { OnboardingComponent } from 'src/app/components/onboarding/onboarding.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SwiperDirective,
    OnboardingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnboardingPage implements OnInit {
  swiperModules = [IonicSlides];

  constructor() {}
  slides: any[] = [];

  ngOnInit(): void {
    this.slides = [
      {
        banner: 'assets/images/onboarding/Pemeriksaan.png',
        title: 'Pemeriksaan Pekerja',
        message:
          'Tujuan dari pengecekan adalah untuk memastikan pekerja menjalankan SOP dengan benar demi keselamatan seluruh pekerja',
      },
      {
        banner: 'assets/images/onboarding/Pengecekan.png',
        title: 'Pengecekan Alat',
        message:
          'Tujuan dari pengecekan alat adalah untuk memastikan alat dapat berjalan dengan optimal dan aman bagi pekerja ',
      },
      {
        banner: 'assets/images/onboarding/Siap.png',
        title: 'Siap SOP',
        message:
          'Siap SOP pekerja telah mengikuti SOP yang tertera dan menjalankan Pengecekan Alat',
      },
    ];
  }
}
