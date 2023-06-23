/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useState } from 'react'
const OrderMessage = ({name,mobileNumber,address,emailAddress, message}) => {
  return (
    <>
      <h1>Thank you for you order</h1>
      <h4>You will receive order confirmation call shortly</h4>
      <div style={{listStyle:'none'}}>
        <li>Name: <span style={{fontWeight:'900'}}>{name}</span></li>
        <li>Number: <span style={{fontWeight:'900'}}>{mobileNumber}</span></li>
        <li>Address: <span style={{fontWeight:'900'}}>{address}</span></li>
        <li>E-mail: <span style={{fontWeight:'900'}}>{emailAddress}</span></li>
        <li>message: <span style={{fontWeight:'900'}}>{message}</span></li>
      </div>
    </>
  )
}
const OrderModal = ({imgSrc, title, priceP, priceK}) => {
  const [showMessage, setShowMessage] = useState({fullName:'', mobileNumber:'', address:'', emailAddress:'',message:'', stat: false});
  const {fullName, mobileNumber, address, emailAddress, message} = showMessage;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Get form data
    
    // Retrieve form values by their names
    const fullName = formData.get('name');
    const mobileNumber = formData.get('number');
    const address = formData.get('address');
    const emailAddress = formData.get('email-address');
    const message = formData.get('your-message');
    
    // Log the form values (replace with your desired logic)
    console.log('Full Name:', fullName);
    console.log('Mobile Number:', mobileNumber);
    console.log('Address:', address);
    console.log('Email Address:', emailAddress);
    console.log('Message:', message);
    axios.post('https://angansweets.com/leadmail.php', {
      fullName,
      mobileNumber,
      address,
      emailAddress,
      message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setShowMessage({fullName, mobileNumber, address, emailAddress, message, stat: true});
  }
  return (
    <>
    {
      !showMessage.stat ? 
    <div className="order-modal">
      <div className="image-item">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgSrc} alt="Besal plain laddu" />
      </div>
      <div className="order-form">
        <div className="order-details">
          <div>
            <div >{title}</div>
            <div style={{fontSize:'12px',color:'#fe0201'}}>{priceP}</div>
          </div>
          <div className="per-kg" style={{color:'#fe0201'}}>{priceK}</div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>
            <div>
              <input
                type="text"
                id="email-address"
                name="email-address"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="text"
                id="your-message"
                name="your-message"
                placeholder="Your Message"
                />
            </div>
            <button className="button">
                Order Now
            </button>
          </div>
        </form>
      </div>
    </div> : <OrderMessage name={fullName} mobileNumber={mobileNumber} address={address} emailAddress={emailAddress} message={message} />
        }
    <div className="order-from-phone">
        <div>ORDER FROM PHONE:</div>
        <p>
            Baluwatar: 9801847636, 01-4417237, Tripureshwor: 9802318809, 01-5312502 , Lazimpat: 9801847639, 01-4511037, Battisputali: 9801975389, 01-5912892, Sanepa: 9802346545, 01-5916923
        </p>
    </div>
    <div className="footer">
        <div className="logo">
            <img src='/img/logo.png' alt='logo' width={100} height={50}/>
        </div>
        <div className="footer-items">
            <li>Menu</li>
            <li>Privacy Policy</li>
            <li>Help Center</li>
        </div>
    </div>
    </>
  );
};

export default OrderModal;
