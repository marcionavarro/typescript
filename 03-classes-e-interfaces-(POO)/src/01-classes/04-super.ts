export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) { }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' HEYYYY!!!';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Marcio', 'Navarro', 40, '000.000.000-00');
const aluno = new Aluno('Marcio', 'Navarro', 40, '000.000.000-00', '0001');
const cliente = new Cliente('Marcio', 'Navarro', 40, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno);
console.log(cliente.getNomeCompleto());
