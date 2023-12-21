import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-panic-button',
  templateUrl: './panic-button.page.html',
  styleUrls: ['./panic-button.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PanicButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
