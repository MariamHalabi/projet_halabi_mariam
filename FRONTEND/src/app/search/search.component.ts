import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';

import {
  map,
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { CatalogueService } from '../catalogue/services/catalogue.service';
import { SearchService } from '../service-search/search.service';
import { Produit } from '../shared/modeles/produit';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Produit[] = [];
  model!: Observable<any>;
  searchField$!: Observable<any>;
  searchedPro: string = '';
  @ViewChild('input', { static: true }) input!: ElementRef;

  constructor(private _service: CatalogueService) {}

  // ngAfterViewInit() {
  //   this.searchField$ = fromEvent(this.input.nativeElement, `keyup`);
  //   this.model = this.searchField$.pipe(
  //     map((event) => event.target.value),
  //     debounceTime(300),
  //     distinctUntilChanged(),

  //     switchMap((term) =>
  //       this._service.search(term).pipe(
  //         catchError(() => {
  //           return of([]);
  //         })
  //       )
  //     )
  //   );
  // }

  getProduitsRecherches(): void {
    this._service.getProduits().subscribe((data) => {
      this.products = data.filter((product: { name: string }) => {
        let predicate = true;
        if (this.searchedPro != '') {
          predicate = product.name
            .toLowerCase()
            .includes(this.searchedPro.toLowerCase());
        }

        return predicate;
      });
    });
  }
}
