import { React } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardsComponent = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
      />
    );
  });
  return <div>{cardsComponent}</div>;
};

export default CardList;
