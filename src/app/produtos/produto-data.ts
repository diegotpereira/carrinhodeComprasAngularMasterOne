import { Produto } from '../shared/interfaces';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProdutoData implements InMemoryDbService {
  createDb() {
    const produtos: Produto[] = [
      {
        id: 1,
        produtoNome: 'Reloj plateado',
        descricao: 'Reloj de pulsera, color plateado, con números romanos',
        preco: 80000,
        imagemUrl: 'assets/images/product1.jpg'
      },
      {
        id: 2,
        produtoNome: 'Cinturón con águila',
        descricao: 'Color gris, con hebilla metalica en forma de águila',
        preco: 20000,
        imagemUrl: 'assets/images/product2.jpg'
      },
      {
        id: 3,
        produtoNome: 'Reloj despertador',
        descricao: 'Reloj de mesa, color gris, con números romanos',
        preco: 50000,
        imagemUrl: 'assets/images/product3.jpg'
      },
      {
        id: 4,
        produtoNome: 'Suéter',
        descricao: 'Suéter de lana, con líneas grises y azules',
        preco: 60000,
        imagemUrl: 'assets/images/product4.jpg'
      },
      {
        id: 5,
        produtoNome: 'Juego de corbatas',
        descricao: 'Corbatas con diferentes figuras y colores',
        preco: 70000,
        imagemUrl: 'assets/images/product5.jpg'
      },
      {
        id: 6,
        produtoNome: 'Reloj inteligente',
        descricao: 'Sumergible, ritmo cardíaco, bluetooth',
        preco: 230000,
        imagemUrl: 'assets/images/product6.jpg'
      },
      {
        id: 7,
        produtoNome: 'Reloj en acero',
        descricao: 'Reloj plateado con azul, sumergible 10 metros',
        preco: 175000,
        imagemUrl: 'assets/images/product7.jpg'
      },
      {
        id: 8,
        produtoNome: 'Tennis de tela',
        descricao: 'Tennis negros con adornos color blanco',
        preco: 40000,
        imagemUrl: 'assets/images/product8.jpg'
      },
      {
        id: 9,
        produtoNome: 'Zapatos para bebe',
        descricao: 'Color verde con cafe, suela antideslizante',
        preco: 67500,
        imagemUrl: 'assets/images/product9.jpg'
      },
      {
        id: 10,
        produtoNome: 'Reloj café y corbata',
        descricao: 'Reloj de pulsera en cuero color café, corbata color gris',
        preco: 310000,
        imagemUrl: 'assets/images/product10.jpg'
      },
      {
        id: 11,
        produtoNome: 'Tennis para mujer',
        descricao: 'Tennis rosados con líneas blancas, cordones rosados',
        preco: 77000,
        imagemUrl: 'assets/images/product11.jpg'
      }
    ];

    return { produtos };
  }
}
