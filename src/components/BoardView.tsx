import React from 'react';
import Card from './Card';
import { assets } from '../constants';

const BoardView = () => {
  return (
    <div className="flex bg-purple-600 h-[100vh] items-center justify-center">
      <Card 
        title={"Statics & Swap Screen"}
        design={"UI Design"}
        priority={"High Priority"}
        comments={23}
        handles={4}
        image={assets.card} 
      />
    </div>
  )
}

export default BoardView