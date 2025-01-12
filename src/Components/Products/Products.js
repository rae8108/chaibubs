import React from "react";
import product1 from "../../images/products/product1.jpeg";
import product2 from "../../images/products/product2.jpeg";
import product3 from "../../images/products/product3.jpeg";
import product4 from "../../images/products/product4.jpeg";
import product5 from "../../images/products/product5.jpeg";
import product6 from "../../images/products/product6.jpeg";
import product7 from "../../images/products/product7.jpeg";
import product8 from "../../images/products/product8.jpeg";
import product9 from "../../images/products/product9.jpeg";
import Footer from "../Footer/Footer";
import "./Products.css"

export default function Products() {
    return (
        <div>
        <h3 className="products">Shop</h3>
        <div className="products-container">
            <div className="products-grid">
                <div>
                    <img src={product1} alt="enamel pin surprise bundle" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/enamel-pin-surprise-bundle-3-packs" target="_blank" rel="noopener noreferrer" > Enamel Pin Surprise Bundle (3 packs)
                        </a></p>
                    <small>10.00 GBP</small>
                </div>

                <div>
                    <img src={product2} alt="lucky dip mystery bag" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/lucky-dip-mystery-bag" target="_blank" rel="noopener noreferrer"  >Lucky Dip Mystery Bag</a></p>
                    <small>15.00 GBP</small>
                </div>

                <div>
                    <img src={product3} alt="must-have bundle" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-must-have-bundle" target="_blank" rel="noopener noreferrer" >Must-Have Bundle</a></p>
                    <small>19.99 GBP</small>
                </div>

                <div>
                    <img src={product4} alt="luxury bundle" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-luxury-bundle" target="_blank" rel="noopener noreferrer" >Luxury Bundle</a></p>
                    <small>29.99 GBP</small>
                </div>

                <div>
                    <img src={product5} alt="easter pins" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-easter-pins-limited-edition" target="_blank" rel="noopener noreferrer" >Easter Pins</a></p>
                    <small>4.99 GBP</small>
                </div>

                <div>
                    <img src={product6} alt="sakura straw" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-sakura-straw" target="_blank" rel="noopener noreferrer" >Sakura Straw</a></p>
                    <small>4.99 GBP</small>
                </div>

                <div>
                    <img src={product7} alt="valentine pins" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-valentine-pins-limited-edition" target="_blank" rel="noopener noreferrer" >Valentine Pins</a></p>
                    <small>4.99 GBP</small>
                </div>

                <div>
                    <img src={product8} alt="spellbound keyrings " />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/spellbound-keyrings" target="_blank" rel="noopener noreferrer" >Spellbound Keyrings</a></p>
                    <small>2.99 GBP</small>
                </div>

                <div>
                    <img src={product9} alt="keyring charging cable" />
                    <p className="productslink"> <a href="https://shop.bubblecitea.com/products/bubble-citea-keyring-copy" target="_blank" rel="noopener noreferrer" >Keyring Charging Cable</a></p>
                    <small>11.99 GBP</small>
                </div>

            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}