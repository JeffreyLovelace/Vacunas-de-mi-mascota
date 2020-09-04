import { Component } from "@angular/core";
import { AdmobService } from "../services/admob.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    //AÑADIMOS AL CONSTRUCTOR.
    private admobService: AdmobService
  ) {}
  ngOnInit() {
    //AL CARGAR LA PAGINA MOSTRAMOS BANNER
    this.admobService.MostrarBanner();
  }
  //FUNCION PARA LLAMAR AL INTERSTITIAL
  MostrarInterstitial() {
    this.admobService.MostrarInterstitial();
  }
  //FUNCION PARA LLAMAR AL VIDEOREWARD
  MostrarReward() {
    this.admobService.MostrarRewardVideo();
  }
}
