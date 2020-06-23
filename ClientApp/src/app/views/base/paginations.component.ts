import { Component, Input, ViewEncapsulation, Output, EventEmitter  } from '@angular/core';


@Component({
  templateUrl: 'paginations.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationsComponent {
  @Input() private page: number;
    @Input() private totalPages: number;
    @Input() public numShops: number;
    @Output() paginaEmitter: EventEmitter<number> =  new EventEmitter();
  constructor() { }

  siguiente(){
        this.page++;
        this.pasarPagina();
      }
      anterior(){
        this.page--;
        this.pasarPagina();
      }
      pasarPagina(){
        this.paginaEmitter.emit(this.page);
      }
}
