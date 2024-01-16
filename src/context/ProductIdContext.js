import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [id, setId] = useState(1); // Ваши данные о продуктах

  const changeId = (id) => {
    setId(id)
  }

  return (
    <ProductContext.Provider value={{ id,changeId }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };