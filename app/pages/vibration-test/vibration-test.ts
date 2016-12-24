import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/vibration-test/vibration-test.html',
})
export class VibrationTestPage {
  constructor(private nav: NavController) {}

  vibrate(){
    Vibration.vibrate(3000);
  }
}
