export interface IFormCliente {
  id: number | null;
  nome: string;
  cpf: string;
  idVenda: number | string;
  idProduto: number;
}

export interface IFilterCliente {
  nome: string;
  cpf: string;
}
