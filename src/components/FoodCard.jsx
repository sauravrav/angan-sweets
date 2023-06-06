const FoodCard = () => {
    return ( 
        <div className="food-card">
            <div class="product-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src='/img/onion-tomato.jpeg' alt="Besal plain laddu" />
            </div>
            <div class="product-details">
                  <div class="info-text">
                    <div class="title">Besan Plain Laddu</div>
                    <div class="price">NRs. 70/pc</div>
                  </div>
                  <div class="order-info">
                    <div class="price">NRs. 1,700/kg</div>
                    <div class="order-button">Order Now
                    </div>
                  </div>
            </div>
        </div>
     );
}
 
export default FoodCard;