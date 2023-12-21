function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Márcio',
  sobrenome: 'Navarro',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Márcio', 'Navarro');
pessoa.exibirNome();

export { pessoa };
