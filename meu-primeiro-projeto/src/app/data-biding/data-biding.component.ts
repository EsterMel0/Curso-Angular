import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Dener";
  public idade: number = 29;

  public checkedDisabled: boolean = false;

  public imgSrc: string = "https://www.google.com/search?q=bolinho+de+lua&client=ubuntu-sn&hs=Zwz&channel=fs&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiisP6_5pX_AhUfr5UCHdjEA6EQ_AUoAXoECAMQAw&biw=1846&bih=968&dpr=1#imgrc=tKxo1MRLhJmdqM";

  constructor(){ }

  ngOnInit(): void {
    
  }
}
