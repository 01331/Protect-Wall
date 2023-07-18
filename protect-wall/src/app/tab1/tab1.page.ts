import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public selectedCondition: string = 'manual'
  public selectedMethod: string = 'none'
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet1() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Turn on condition",
      buttons: [
        {
          text: 'Manual',
          handler: () => {
            this.selectedCondition = 'manual';
          }
        },
        {
          text: 'Timer',
          handler: () => {
            this.selectedCondition = 'timer';
          }
          
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  async presentActionSheet2() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Deactivation Method",
      buttons: [
        {
          text: 'None',
          handler: () => {
            this.selectedMethod = 'none';
          }
        },
        {
          text: 'Pin Code',
          handler: () => {
            this.selectedMethod = 'pin';
          }
        },
        {
          text: 'Charger Connections',
          handler: () => {
            this.selectedMethod = 'charge';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

}
