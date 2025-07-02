import React from 'react';

interface CardData {
  title: string;
  description: string;
}

interface CardsRowProps {
  cards: CardData[];
}

const CardsRow: React.FC<CardsRowProps> = ({ cards }) => {
  return (
    <div className="row mt-4">
      {cards.map((card, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsRow;
