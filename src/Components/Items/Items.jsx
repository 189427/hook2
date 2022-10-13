import React from "react";
import './items.css'
import placeholder from '../../Assets/img/placeholder.png' 


const data = [
  {
    id: 1,
    image: placeholder,
    title: "Biology 401",
    description: "Author: Kobe Bean",
    price: "$15.99"
  },
  {
    id: 2,
    image: placeholder,
    title: "CompSci 101",
    description: "Author: Robert Rob",
    price: "$78.99"
  },
  {
    id: 3,
    image: placeholder,
    title: "Calculus 1",
    description: "Author: Russ Westbrick",
    price: "$98.69"
  },
  {
    id: 4,
    image: placeholder,
    title: "Shirt",
    description: "size M",
    price: "$5.99"
  },
  {
    id: 5,
    image: placeholder,
    title: "Shirt",
    description: "size S",
    price: "$14.99"
  },
  {
    id: 6,
    image: placeholder,
    title: "Jacket",
    description: "Size L",
    price: "$38.99"
  },
  {
    id: 7,
    image: placeholder,
    title: "Beanie",
    description: "size S",
    price: "$10.00"
  },
  {
    id: 8,
    image: placeholder,
    title: "SunGlasses",
    description: "Womens",
    price: "$42.99"
  },
  {
    id: 9,
    image: placeholder,
    title: "Jersey",
    description: "size M",
    price: "$25.55"
  },
  {
    id: 10,
    image: placeholder,
    title: "Sweats",
    description: "size M",
    price: "$40.99"
  },
]

function ItemCard() {
  // Submit button functionality
  return (
    <section id="item-container">

      <div className="item-cards">
        {
          data.map(({id, image, title, description, price}) => {
            return (
              <article key={id} className='item-id'>
                <div className="item-image">
                  <img src={placeholder} alt={''} />
                </div>
                <h2>{title}</h2>
                <h3>{price}</h3>
                  <div className="item-description">
                    <h5>{description}</h5>
                  </div>
                  <button>Buy Now</button>
              </article>
            )
          })
        }
      </div>

    
    </section>
  );
}

export default ItemCard;
