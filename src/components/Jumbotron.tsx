import React from 'react';

interface JumbotronProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`bg-light p-5 rounded ${className}`}>
      <h1 className="display-4">{title}</h1>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
};

export default Jumbotron;
