import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/notification-test/notification-test.html',
})
export class NotificationTestPage {

  notification: any;

  constructor(private nav: NavController) {

    LocalNotifications.on('click',(notification,state) =>{
        this.notification = notification;
    });
  }

  send() {
    LocalNotifications.schedule({
      id: 1,
      text: 'Notificação de teste',
      data: {secret: 'olá'}
    });
  }
}
