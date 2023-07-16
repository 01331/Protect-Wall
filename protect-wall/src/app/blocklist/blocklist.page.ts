import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocklist',
  templateUrl: './blocklist.page.html',
  styleUrls: ['./blocklist.page.scss'],
})
export class BlocklistPage implements OnInit {

  public selectedSegment: string = 'Apps'
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }

  public form = [
    { val: 'Facebook', isChecked: false },
    { val: 'Twitter', isChecked: false },
    { val: 'Tiktok', isChecked: false },
    { val: 'Instagram', isChecked: false },
    { val: 'Snapchat', isChecked: false },
    { val: 'Discord', isChecked: false },
  ];

}
