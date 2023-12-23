let x = 10; // eslint-disable-line
x = 0b10101;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Marcio' as const,
  sobrenome: 'Navarro',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
