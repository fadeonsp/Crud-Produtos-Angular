import { InMemoryDbService } from  'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {

  createDb() {
    const produtos = [
      {id: 1,  nome: 'carrinho', descricao: 'anda, acende farol, pisca', preco: 8.50},
      {id: 2,  nome: 'ponte', descricao: 'passarela de acesso para as pessoas', preco: 10.50},
      {id: 3,  nome: 'caderno', descricao: 'escreve, usado por alunos na escola', preco: 2.50},
      {id: 4,  nome: 'livro', descricao: 'leitura, realça a imaginação e criatividade', preco: 8.50}
    ];
    return {produtos};
  }
}
