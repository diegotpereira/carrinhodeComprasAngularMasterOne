import { Produto } from '../shared/interfaces';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProdutoData implements InMemoryDbService {
  createDb() {
    const produtos: Produto[] = [
      {
        id: 1,
        produtoNome: 'Relógio de prata',
        descricao: 'Relógio de pulso, cor prata, com números romanos',
        preco: 80000,
        imagemUrl: 'assets/images/product1.jpg'
      },
      {
        id: 2,
        produtoNome: 'Cinto com águia',
        descricao: 'Cor cinza, com fivela de metal em forma de águia',
        preco: 20000,
        imagemUrl: 'assets/images/product2.jpg'
      },
      {
        id: 3,
        produtoNome: 'Relógio despertador',
        descricao: 'Relógio de mesa, cor cinza, com números romanos',
        preco: 50000,
        imagemUrl: 'assets/images/product3.jpg'
      },
      {
        id: 4,
        produtoNome: 'Suéter',
        descricao: 'Suéter de lã, com linhas cinza e azuis',
        preco: 60000,
        imagemUrl: 'assets/images/product4.jpg'
      },
      {
        id: 5,
        produtoNome: 'Conjunto de gravatas',
        descricao: 'Gravatas com diferentes formas e cores',
        preco: 70000,
        imagemUrl: 'assets/images/product5.jpg'
      },
      {
        id: 6,
        produtoNome: 'Relógio inteligente',
        descricao: 'Submersível, ritmo cardíaco, bluetooth',
        preco: 230000,
        imagemUrl: 'assets/images/product6.jpg'
      },
      {
        id: 7,
        produtoNome: 'Relógio de aço',
        descricao: 'Relogio prateado com azul, Submersível 10 metros',
        preco: 175000,
        imagemUrl: 'assets/images/product7.jpg'
      },
      {
        id: 8,
        produtoNome: 'Tênis de Mesh',
        descricao: 'Tênis pretos com enfeites brancos',
        preco: 40000,
        imagemUrl: 'assets/images/product8.jpg'
      },
      {
        id: 9,
        produtoNome: 'Tênis infantil',
        descricao: 'Cor verde com café, sola antiderrapante',
        preco: 67500,
        imagemUrl: 'assets/images/product9.jpg'
      },
      {
        id: 10,
        produtoNome: 'Conjunto relógio cor café e gravata',
        descricao: 'Relógio de pulso de couro marrom, gravata cinza',
        preco: 310000,
        imagemUrl: 'assets/images/product10.jpg'
      },
      {
        id: 11,
        produtoNome: 'Tênis feminino',
        descricao: 'Tênis rosa com linhas brancas, cadarços rosa',
        preco: 77000,
        imagemUrl: 'assets/images/product11.jpg'
      }
    ];

    return { produtos };
  }
}
