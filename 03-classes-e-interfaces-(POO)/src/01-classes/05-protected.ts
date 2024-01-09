export class Empresa {
  public readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
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

export class Freelancer extends Empresa {
  constructor() {
    super('Freelancer', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Freelancer();
const coloaborador1 = new Colaborador('Márcio', 'Navarro');
const coloaborador2 = new Colaborador('João', 'Augusto');
const coloaborador3 = new Colaborador('Maria', 'Aparecida');

empresa1.adicionaColaborador(coloaborador1);
empresa1.adicionaColaborador(coloaborador2);
empresa1.adicionaColaborador(coloaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
