export interface LocationItem {
  id: string;
  name: string;
  shortName: string;
  address: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: 'SC' | 'PB' | 'BA';
  stateName: string;
  cep: string;
  googleMapsQuery: string;
  googleMapsUrl: string;
  wazeUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  details?: string;
  type: 'CD' | 'Armazém' | 'Fábrica' | 'Expedição';
}

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'cocal-cd',
    name: 'EXPEDIÇÃO COCAL DO SUL CD',
    shortName: 'Cocal do Sul CD',
    address: 'ROD. MAXIMILIANO GAIDZINSKI, CENTRO - 245, COCAL DO SUL - SC, 88845-000',
    street: 'Rua. Maximiliano Gaidzinski',
    number: '245',
    neighborhood: 'Centro',
    city: 'Cocal do Sul',
    state: 'SC',
    stateName: 'Santa Catarina',
    cep: '88845-000',
    googleMapsQuery: 'Rod. Maximiliano Gaidzinski, 245, Centro, Cocal do Sul - SC, 88845-000',
    googleMapsUrl:'https://www.google.com/maps/search/?api=1&query=Rua+Ambr%C3%B3sio+Dallo%2C+330%2C+Centro%2C+Cocal+do+Sul+-+SC%2C+88845-000',
    wazeUrl: 'https://waze.com/ul?q=Rod.+Maximiliano+Gaidzinski%2C+245%2C+Cocal+do+Sul',
    coordinates: { lat: -28.6019, lng: -49.3283 },
    type: 'CD',
    details: 'Centro de Distribuição principal - Portaria e expedição de cargas pesadas.'
  },
  {
    id: 'cocal-armazem',
    name: 'EXPEDIÇÃO COCAL DO SUL ARMAZÉM',
    shortName: 'Cocal do Sul Armazém',
    address: 'RUA AMBRÓSIO DALLO, 330 - CENTRO, COCAL DO SUL - SC, 88845-000',
    street: 'Rua Ambrósio Dallo',
    number: '330',
    neighborhood: 'Centro',
    city: 'Cocal do Sul',
    state: 'SC',
    stateName: 'Santa Catarina',
    cep: '88845-000',
    googleMapsQuery: 'Rua Ambrósio Dallo, 330, Centro, Cocal do Sul - SC, 88845-000',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Ambr%C3%B3sio+Dallo%2C+330%2C+Centro%2C+Cocal+do+Sul+-+SC%2C+88845-000',
    wazeUrl: 'https://waze.com/ul?q=Rua+Ambrosio+Dallo%2C+330%2C+Cocal+do+Sul',
    coordinates: { lat: -28.6045, lng: -49.3248 },
    type: 'Armazém',
    details: 'Armazém logístico regulador e expedição de produtos cerâmicos.'
  },
  {
    id: 'criciuma-sc5',
    name: 'EXPEDIÇÃO CRICIÚMA SC5',
    shortName: 'Criciúma SC5',
    address: 'ROD. LUIZ ROSSO, 8480 - DAGOSTIN, CRICIÚMA - SC, 88812-000',
    street: 'Rod. Luiz Rosso',
    number: '8480',
    neighborhood: 'Dagostin',
    city: 'Criciúma',
    state: 'SC',
    stateName: 'Santa Catarina',
    cep: '88812-000',
    googleMapsQuery: 'Rod. Luiz Rosso, 8480, Dagostin, Criciúma - SC, 88812-000',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rod.+Luiz+Rosso%2C+8480%2C+Dagostin%2C+Crici%C3%BAma+-+SC%2C+88812-000',
    wazeUrl: 'https://waze.com/ul?q=Rod.+Luiz+Rosso%2C+8480%2C+Criciuma',
    coordinates: { lat: -28.7368, lng: -49.3491 },
    type: 'Expedição',
    details: 'Unidade industrial e expedição SC5 - Acesso facilitado pela Rodovia Luiz Rosso.'
  },
  {
    id: 'criciuma-sc4',
    name: 'EXPEDIÇÃO CRICIÚMA SC4',
    shortName: 'Criciúma SC4',
    address: 'ROD. LUIZ ROSSO, 4570-4818 - SÃO LUÍZ, CRICIÚMA - SC, 88803-470',
    street: 'Rod. Luiz Rosso',
    number: '4570-4818',
    neighborhood: 'São Luíz',
    city: 'Criciúma',
    state: 'SC',
    stateName: 'Santa Catarina',
    cep: '88803-470',
    googleMapsQuery: 'Rod. Luiz Rosso, 4570-4818, São Luíz, Criciúma - SC, 88803-470',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rod.+Luiz+Rosso%2C+4570-4818%2C+S%C3%A3o+Lu%C3%ADz%2C+Crici%C3%BAma+-+SC%2C+88803-470',
    wazeUrl: 'https://waze.com/ul?q=Rod.+Luiz+Rosso%2C+4570%2C+Criciuma',
    coordinates: { lat: -28.7115, lng: -49.3622 },
    type: 'Expedição',
    details: 'Unidade industrial e expedição SC4 - Bairro São Luíz.'
  },
  {
    id: 'pb-1',
    name: 'EXPEDIÇÃO PB1',
    shortName: 'Paraíba PB1',
    address: 'BR-101, KM 98 - DISTRITO INDUSTRIAL, CONDE - PB, 58082-030',
    street: 'BR-101',
    number: 'Km 98',
    neighborhood: 'Distrito Industrial',
    city: 'Conde',
    state: 'PB',
    stateName: 'Paraíba',
    cep: '58082-030',
    googleMapsQuery: 'BR-101, Km 98, Distrito Industrial, Conde - PB, 58082-030',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=BR-101%2C+KM+98%2C+Distrito+Industrial%2C+Conde+-+PB%2C+58082-030',
    wazeUrl: 'https://waze.com/ul?q=BR-101%2C+KM+98%2C+Conde+-+PB',
    coordinates: { lat: -7.2882, lng: -34.9084 },
    type: 'Expedição',
    details: 'Unidade fabril e expedição Conde / João Pessoa - Polo cerâmico nordeste.'
  },
  {
    id: 'pb-2',
    name: 'EXPEDIÇÃO PB2',
    shortName: 'Paraíba PB2',
    address: 'RUA CAPITÃO JOSÉ RODRIGUES, 870 - JOÃO PESSOA - PB, 58082-007',
    street: 'Rua Capitão José Rodrigues',
    number: '870',
    neighborhood: 'Distrito Industrial',
    city: 'João Pessoa',
    state: 'PB',
    stateName: 'Paraíba',
    cep: '58082-007',
    googleMapsQuery: 'Rua Capitão José Rodrigues, 870, João Pessoa - PB, 58082-007',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Capit%C3%A3o+Jos%C3%A9+Rodrigues%2C+870%2C+Jo%C3%A3o+Pessoa+-+PB%2C+58082-007',
    wazeUrl: 'https://waze.com/ul?q=Rua+Capitao+Jose+Rodrigues%2C+870%2C+Joao+Pessoa',
    coordinates: { lat: -7.1643, lng: -34.8967 },
    type: 'Expedição',
    details: 'Unidade logística e centro de expedição João Pessoa PB2.'
  },
  {
    id: 'bahia',
    name: 'EXPEDIÇÃO BAHIA',
    shortName: 'Bahia Camaçari',
    address: 'AV. INDUSTRIAL URBANA, 495 - BAIRRO INDUSTRIAL, CAMAÇARI - BA, 42800-021',
    street: 'Av. Industrial Urbana',
    number: '495',
    neighborhood: 'Bairro Industrial',
    city: 'Camaçari',
    state: 'BA',
    stateName: 'Bahia',
    cep: '42800-021',
    googleMapsQuery: 'Av. Industrial Urbana, 495, Bairro Industrial, Camaçari - BA, 42800-021',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Industrial+Urbana%2C+495%2C+Bairro+Industrial%2C+Cama%C3%A7ari+-+BA%2C+42800-021',
    wazeUrl: 'https://waze.com/ul?q=Av.+Industrial+Urbana%2C+495%2C+Camacari',
    coordinates: { lat: -12.6974, lng: -38.3242 },
    type: 'Expedição',
    details: 'Complexo fabril e expedição Bahia - Polo Industrial de Camaçari.'
  }
];
