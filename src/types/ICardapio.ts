import cardapio from 'data/cardapio.json';

export type ICardapio = typeof cardapio;

export type Prato = typeof cardapio[0]