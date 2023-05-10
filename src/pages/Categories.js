import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const { status } = useSelector((store) => store.category);

  return <h2>{status}</h2>;
};

export default Categories;
