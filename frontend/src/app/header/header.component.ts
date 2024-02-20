import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  presentation: string = 'Bem-vindo à Tabela de Transações e Controle Financeiro';
}
