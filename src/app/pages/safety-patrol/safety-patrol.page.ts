import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-safety-patrol',
  templateUrl: './safety-patrol.page.html',
  styleUrls: ['./safety-patrol.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SafetyPatrolPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
