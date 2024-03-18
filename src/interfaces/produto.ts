export interface IFormProduto {
  id: number | null;
  nome: string;
  idCategoria: number;
  preco: number | string;
  quantidade: number;
}

export interface IFilterProduto {
  nome: string;
  categoria: number | null;
}
