import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CameraTestPage} from './pages/camera-test/camera-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<any>;
  rootPage: any = HomePage;

  constructor(platform: Platform, public menu: MenuController) {

    this.pages = [
      {title: 'Mengão', component: HomePage},
      {title: 'Câmera', component: CameraTestPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page){
    this.menu.close();
    this.rootPage = page.component;
  }

}

ionicBootstrap(MyApp);
