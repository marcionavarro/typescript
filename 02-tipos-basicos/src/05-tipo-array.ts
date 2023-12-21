// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(upper);
