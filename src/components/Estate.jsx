import React from 'react';
import './Estate.css';

export default function EstateVillaSection() {
  return (
    <section className="estate-villa-container py-5" id="estate-villa-1bhk">
      <div className="container px-3 px-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 text-center d-flex flex-column align-items-center">
            
            <span className="villa-tag d-block mb-2">
              Estate Villa · 1BHK
            </span>

            <h2 className="villa-heading mb-3">
              Intimate. Private. Immersed in Nature.
            </h2>

            <p className="villa-description mb-4">
              The 1BHK Estate Villa is designed as a luxury private suite inside the
              coffee estate. Ideal for couples, weekend stays, wellness escapes, and
              hospitality rentals. Compact, elegant, and deeply connected to the
              outdoors.
            </p>

            <div className="price-card-box p-4">
              <span className="price-tagline d-block mb-2">
                INDICATIVE PRICE · PER VILLA
              </span>
              <div className="price-value mb-2">
                ₹2.85 Cr
              </div>
              <span className="price-subtext d-block">
                Includes fully managed estate hospitality model
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}