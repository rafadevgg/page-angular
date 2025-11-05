import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../shared/models/Produto';
import { Cards } from '../../components/cards/cards';
import { Subscription } from 'rxjs';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule, FormsModule, Cards],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.scss'],
})
export class PaginaInicial implements OnInit, OnDestroy {

  produtos: Produto[] = [
    new Produto('Camisa Lacoste 1', 'Camisa muito confortável e social!', 299.90, 'camisa1.avif'),
    new Produto('Camisa Lacoste 2', 'Camisa muito incrível e confortável!', 299.90, 'camisa2.avif'),
    new Produto('Camisa Lacoste 3', 'Camisa muito social e incrível!', 299.90, 'camisa3.avif'),
    new Produto('Boné Lacoste 1', 'Boné muito confortável e social!', 159.90, 'bone1.avif'),
    new Produto('Boné Lacoste 2', 'Boné muito incrível e confortável!', 159.90, 'bone2.avif'),
    new Produto('Boné Lacoste 3', 'Boné muito social e incrível!', 159.90, 'bone3.avif')
  ];

  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';
  private subs: Subscription | null = null;

  get produtosBuscados(): Produto[] {
    let lista = this.produtos;

    if (this.searchTerm && this.searchTerm.trim()) {
      const termo = this.searchTerm.toLowerCase();
      lista = lista.filter(j => j.nome.toLowerCase().includes(termo));
    }

    if (this.sortOrder === 'asc')
      lista = lista.slice().sort((a, b) => a.preco - b.preco);
    else if (this.sortOrder === 'desc')
      lista = lista.slice().sort((a, b) => b.preco - a.preco);

    return lista;
  }

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.subs = this.searchService.term$.subscribe(t => this.searchTerm = t || '');
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
