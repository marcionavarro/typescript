export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Empresa('Freelancer', '11.111.111/0001-11');
const coloaborador1 = new Colaborador('Márcio', 'Navarro');
const coloaborador2 = new Colaborador('João', 'Augusto');
const coloaborador3 = new Colaborador('Maria', 'Aparecida');

empresa1.adicionaColaborador(coloaborador1);
empresa1.adicionaColaborador(coloaborador2);
empresa1.adicionaColaborador(coloaborador3);
empresa1.adicionaColaborador({
  nome: 'Marcio2',
  sobrenome: 'Navarro2',
});

console.log(empresa1.nome);
