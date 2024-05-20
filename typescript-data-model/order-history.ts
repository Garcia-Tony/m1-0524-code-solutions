interface orderHistory {
  orderPlaced: string;
  total: string;
  shipTo: string;
  orderNumber: string;
  delivered: string;
  title: string;
  author: string;
  returnWindowClosedOn: string;
  price: string;
  description: string;
  item: string;
  itemReturnWindow: string;
  itemPrice: string;
}

const orderHistory: any[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: '#34.00',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    delivered: 'Aug 8, 2020',
    title: 'Javascript for impatient programmers',
    author: 'Dr. Axel Rauschmayer',
    returnWindowClosedOn: 'Sep 7, 2020',
    price: '$31.55',
  },
  {
    orderPlaced: 'July 19, 2020',
    total: '$44.53',
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    delivered: 'Jul 20, 2020',
    description:
      'Your package was delivered. It was handed directly to a resident',
    title: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    returnWindowClosedOn: 'Aug 19, 2020',
    price: '$41.33',
  },
  {
    orderPlaced: 'July 4, 2020',
    total: '$17.22',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    delivered: 'Jul 7, 2020',
    description:
      'Your package was delivered. It was handed directly to a resident',
    item: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    returnWindowClosedOn: 'Aug 5, 2020',
    price: '$15.98',
  },
  {
    orderPlaced: 'July 3, 2020',
    total: '$138.93',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    delivered: 'Jul 5, 2020',
    item: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    itemReturnWindowClosedOn: 'Aug 4, 2020',
    itemPrice: '$94.95',
    title: 'The Art of SQL',
    author: 'Stephane Faroult',
    returnWindowClosedOn: 'Aug 4, 2020',
    price: '$33.99',
  },
];
