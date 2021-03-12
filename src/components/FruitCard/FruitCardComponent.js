import React from 'react';
import './FruitCardComponent.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function FruitCardComponent({ id, img, f_name, qty, price, mrp }) {
    return (
        <div>
            <div className="fruit_card">
            <div className="card card_size">
                <img className="card-img-top imge" src={img} alt="Card image cap" />
                <div className="card-body">
                    <p className="title">{f_name}</p>
                    <div className="fruit_desc">
                        <div className="fruit_qty">
                            <p>{qty}</p>
                            <p className="marg"><span className="price">₹{price}</span><span className="cut_price">{mrp}</span></p>
                        </div>
                        <div className="add_btn">
                            <button className="add_btnn"><ShoppingCartIcon style={{ fontSize: 15 }} /> ADD</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default FruitCardComponent;
