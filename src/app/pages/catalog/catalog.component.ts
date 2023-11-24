import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../../shared/ui';
import { CatalogFacadeService } from './store/catalog-facade.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  providers: [CatalogFacadeService],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  public isLoading$ = this._catalogFacadeService.getSelectPenging$.pipe(
    map((loading) => loading.getItemsLoading)
  );

  public pizzaItems$ = this._catalogFacadeService.getSelectItems$.pipe(
    map((items) => items)
  );

  constructor(private _catalogFacadeService: CatalogFacadeService) {}

  ngOnInit(): void {
    this._catalogFacadeService.getPizzaItems();
  }
}
