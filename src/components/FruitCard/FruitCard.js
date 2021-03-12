import React from 'react';
import './FruitCard.css';
import './FruitCardComponent';
import FruitCardComponent from './FruitCardComponent';
import {fruitDetails} from './fruitDetails';

function FruitCard({ id, img, f_name, qty, price, mrp }) {
    return (
        <div>
            <div className="margin">
                <h2>Best Deals</h2>
                <hr />
                <div className="f">
                    {fruitDetails.map((fruitDetails) => (
                        <FruitCardComponent img={fruitDetails.img} f_name={fruitDetails.f_name} qty={fruitDetails.qty} price={fruitDetails.price} mrp={fruitDetails.mrp} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FruitCard;
