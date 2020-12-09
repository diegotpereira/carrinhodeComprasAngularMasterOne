export interface Produto {
    id: number;
    produtoNome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
  }

  export interface ProdutoResolved {
    produto: Produto;
    error?: any;
  }
  export interface OrderItem {
    produto: Produto;
    precoTotal: number;
    quantidade: number;
  }
  