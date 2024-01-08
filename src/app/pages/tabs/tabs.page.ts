import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabsPage implements OnInit {
  constructor(
    public environmentInjector: EnvironmentInjector,
    public navCtrl: NavController
  ) {}

  navigateForward() {
    this.navCtrl.navigateForward('tabs/panic-button');
  }

  ngOnInit() {}
}
