import { Component, OnInit } from '@angular/core';
import { PRODOTTI } from './lista-prodotto.component';
import { ProdottiService } from './prodotti.service';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './lista-prodotto-component.html',
  styleUrls: ['./lista-prodotto-component.css'],
})
export class ProdottoComponent implements OnInit {
  Prodotto = PRODOTTI;
  mostraImmagine: boolean = false;
  //listFilter: string = '';

  constructor(private ProdottiServizio: ProdottiService);

  private _listFilter: string = '';
  prodottiFiltrati: Prodotto[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.prodottiFiltrati = this.datiFiltrati(value);
  }

  mostraNascondi(): void {
    this.mostraImmagine = !this.mostraImmagine;
  }

  datiFiltrati(filtratoPer: string): Prodotto[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();

    return this.Prodotto.filter((prodottiFiltrati: Prodotto) =>
      prodottiFiltrati.productName.toLocaleLowerCase().includes(filtratoPer)
    );
  }

  ngOnInit() {
    this.Prodotto = this.prodottiServizio.getProdotti()
    console.log('lista creata.');
    this.listFilter = '';
  }

  fromStelle: string = '';
  onStelleClick(valore: string): void {
    this.fromStelle = valore;
  }
}
