import React from 'react';
import './CarsList.scss';
import CarItem from './CarItem';

const cars = [
  {
    id: 0,
    main: '1.6 MT Ambiente 85 л.с. МКПП',
    color: 'black',
    price: '1 689 000 руб.',
    options:
      '+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3»',
    year: '2012',
    status: 'Ожидается'
  },
  {
    id: 1,
    main: '1.6 MT Ambiente Plus 105 л.с. МКПП',
    color: 'white',
    price: '1 189 900 руб.',
    options: '',
    year: '2012',
    status: 'Ожидается'
  },
  {
    id: 3,
    main: '1.6 MT Trend 105 л.с. МКПП',
    color: 'gray',
    price: '1 459 000 руб.',
    options: '',
    year: '2012',
    status: 'В наличии'
  }
];

const CarsList = () => {
  const items = cars.map(car => <CarItem key={car.id} {...car} />);
  return <section className="carsList">{items}</section>;
};

export default CarsList;
