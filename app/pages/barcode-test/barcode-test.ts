import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/barcode-test/barcode-test.html',
})
export class BarcodeTestPage {

  barcodeData: any;

  constructor(private nav: NavController) {


  }

  scan() {
    BarcodeScanner.scan().then(barcodeData => {

      this.barcodeData = barcodeData;
    }, (err) => {
      console.log(err);
    });
  }
}
