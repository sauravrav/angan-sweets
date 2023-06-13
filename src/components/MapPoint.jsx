/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MapPoint = () => {

  return (
    <div className='pre-footer'>
        <div className='order-now'>
            <div className="head-title">Order Now!</div>
            <div className="iconwrap">
            <li>
                <img src="assets/icons/phone.png" alt="phone" width={20} height={20}/>
              </li>
              <li>
                <img src="assets/icons/viber.png" alt="viber" width={20} height={20}/>
              </li>
              <li>
                <img src="assets/icons/whatsapp.png" alt="whatsapp" width={20} height={20}/>
              </li>
              <li>
                <a
                  href="https://pathao.com/np/food/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/icons/pathao.png"
                    alt="pathao-food"
                    className="pathao-bottom"
                    width={60} height={20}
                  />
                </a>
              </li>
              <li>
              <a
                href="https://foodmandu.com/Restaurant/Details/1388"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="assets/icons/logo-foodmandu.png"
                  alt="foodmandu"
                  class="pathao-bottom"
                  width={80} height={20}
                />
              </a>
              </li>
            </div>
            <div className="location-wrap">
              <img src="./assets/icons/clock.png" alt="clock" width={50} height={50} style={{padding: '40px'}} />
              <div className="text-detail">
                <span> Tripureshwor: 8am to 9pm </span>
                <span> Lazimpat : 8am to 8pm </span>
                <span> Battisputali : 8am to 8pm </span>
                <span> Baluwatar : 8am to 8pm </span>
                <span> Sanepa : 8am to 8pm </span>
              </div>
            </div>
            <div className="location-wrap">
              <img src="./assets/icons/clock.png" alt="clock" width={50} height={50} style={{padding: '40px'}} />
              <div className="text-detail">
                <span> Tripureshwor: 8am to 9pm </span>
                <span> Lazimpat : 8am to 8pm </span>
                <span> Battisputali : 8am to 8pm </span>
                <span> Baluwatar : 8am to 8pm </span>
                <span> Sanepa : 8am to 8pm </span>
              </div>
            </div>
        </div>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4364476323794!2d85.3112467!3d27.703807699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185574fe82e9%3A0x4f0961d4882478b7!2sAngan%20Sweets!5e0!3m2!1sen!2snp!4v1686681498350!5m2!1sen!2snp"
            width="600"
            height="450"
            className="gmap"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            ></iframe>
        </div>
    </div>
  );
};

export default MapPoint;