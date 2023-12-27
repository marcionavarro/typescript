import './form-control';

export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Marcio', 30);
funcao.apply(new Date(), ['Saipers', 40]);
