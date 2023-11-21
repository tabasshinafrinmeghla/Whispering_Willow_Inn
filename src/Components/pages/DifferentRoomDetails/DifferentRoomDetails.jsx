import React from 'react';
import { useParams } from 'react-router-dom';

const DifferentRoomDetails = () => {

  const { id } = useParams();
  return (
    <div>
      <h2>All room :{id}</h2>
    </div>
  );
};

export default DifferentRoomDetails;