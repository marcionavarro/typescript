const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'chave B',
};

objetoA.chaveB = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
