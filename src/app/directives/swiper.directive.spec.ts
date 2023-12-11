import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from "swiper";

@Directive({
  standalone: true,
  selector: '[appSwiper]'
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);

    // @ts-ignore
    this.el.nativeElement.initialize();
  }
}