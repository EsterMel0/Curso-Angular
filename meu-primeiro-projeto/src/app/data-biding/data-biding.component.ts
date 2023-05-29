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

  public imgSrc: string = "";

  public alertaInfo(){
    alert("Deu certo!")
  }

  constructor(){ }

  ngOnInit(): void {
    
  }
}
