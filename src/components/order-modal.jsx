import Image from "next/image";

const OrderModal = ({imgSrc, title, priceP, priceK}) => {
  return (
    <>
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
        <form action="post">
          <div className="row">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Mobile Number"
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
            <div className="button">
                Order Now
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="order-from-phone">
        <div>ORDER FROM PHONE:</div>
        <p>
            Baluwatar: 9801847636, 01-4417237, Tripureshwor: 9802318809, 01-4212502 , Lazimpat: 9801847639, 01-4411037, Battisputali: 9801975389, 01-5912892, Sanepa: 9802346545, 01-5916923
        </p>
    </div>
    <div className="footer">
        <div className="logo">
            <Image src='/img/logo.png' alt='logo' width={100} height={50}/>
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
