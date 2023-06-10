import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import OrderModal from './order-modal'

const MySwal = withReactContent(Swal)

const FoodCard = ({imgSrc, title, priceP, priceK}) => {
  const handleClick = () => {
    MySwal.fire({
      html: <OrderModal imgSrc={imgSrc} title={title} priceP={priceP} priceK={priceK} />,
      showConfirmButton: false,
      customClass: {
        popup: 'order-modal',
      },
      width: 1000,
      showCloseButton: true,
    }).then(r => {})
  }
    return (
        <div className="food-card" onClick={handleClick}>
            <div className="product-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc} alt="Besal plain laddu" />
            </div>
            <div className="product-details">
                  <div className="info-text">
                    <div className="title">{title}</div>
                    <div className="price">{priceP}</div>
                  </div>
                  <div className="order-info">
                    <div className="price">{priceK}</div>
                    <div className="order-button">Order Now
                    </div>
                  </div>
            </div>
        </div>
     );
}
 
export default FoodCard;