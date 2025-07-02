import React from 'react';
import Carousel from '../components/Carrucel';
import Alert from '../components/Alert';
import Jumbotron from '../components/Jumbotron';
import CardsRow from '../components/CardsRow';

const carouselItems = [
  { src: 'https://picsum.photos/id/1015/1200/400', alt: 'Slide 1' },
  { src: 'https://picsum.photos/id/1025/1200/400', alt: 'Slide 2' },
  { src: 'https://picsum.photos/id/1043/1200/400', alt: 'Slide 3' },
];

const cards = [
  { title: 'Usuarios', description: 'Gestiona el listado de usuarios registrados.' },
  { title: 'Cálculo de Sueldos', description: 'Calcula el sueldo neto de cada empleado.' },
  { title: 'Registro Rápido', description: 'Registra nuevos usuarios fácilmente.' },
];

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
        <Jumbotron  title="Bienvenido a Mi App!"  subtitle="Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design."/>
        <Carousel id="mainCarousel" items={carouselItems} />
        <CardsRow cards={cards} />
        <Alert type="success" message="Bienvenido al sistema de usuarios y nómina." />
        <Alert type="info" message="Recuerda completar todos los campos antes de calcular." />
     </div>
  );
};

export default Home;
