import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./ProductComponent.scss";



export const ProductComponent = () => {

  const filterProducts = useSelector((state) => state.allProducts.filteredItems)


  const renderList = filterProducts.map((products) => {

    const { id, title, image, price } = products;
    return (
      <div className="Card" key={id}>
        <Link to={`/product/${id}`}  >
          <div className="card-image"><img src={image} alt={title} /></div>
          <div className="card-title">{title}</div>
          <div>
            <div className="card-price">€ {price}</div>
          </div>
        </Link>


      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}
