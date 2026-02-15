/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import heroImage from "./assets/heroImage.png";
import Bruschetta from "./assets/Bruschetta.png";
import GreekSalad from "./assets/GreekSalad.png";
import LemonDessert from "./assets/LemonDessert.png";
import AliceW from "./assets/AliceW.png";
import BobJ from "./assets/BobJ.png";
import chefs from "./assets/chefs.png";
import dining from "./assets/dining.png";
import JaneS from "./assets/JaneS.png";
import JohnD from "./assets/JohnD.png";

function Main() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-label="Welcome section">
        <div className="container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking" className="btn btn-primary">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            {/* Add your hero image here */}
            <img src={heroImage} alt="Little Lemon restaurant food" />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials section" aria-labelledby="specials-heading">
        <div className="container">
          <div className="specials-header">
            <h2 id="specials-heading">This Week's Specials!</h2>
            <Link to="/menu" className="btn btn-primary btn-sm">
              Online Menu
            </Link>
          </div>

          <div className="specials-grid">
            {/* Greek Salad */}
            <article className="special-card">
              <img
                src={GreekSalad}
                alt="Greek Salad"
                className="special-card-image"
              />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3 className="special-card-title">Greek Salad</h3>
                  <span className="special-card-price">$12.99</span>
                </div>
                <p className="special-card-description">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className="special-card-footer">
                  <a href="#footer" className="delivery-link">
                    Order a delivery 🚴
                  </a>
                </div>
              </div>
            </article>

            {/* Bruschetta */}
            <article className="special-card">
              <img
                src={Bruschetta}
                alt="Bruschetta"
                className="special-card-image"
              />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3 className="special-card-title">Bruschetta</h3>
                  <span className="special-card-price">$5.99</span>
                </div>
                <p className="special-card-description">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <div className="special-card-footer">
                  <a href="#order" className="delivery-link">
                    Order a delivery 🚴
                  </a>
                </div>
              </div>
            </article>

            {/* Lemon Dessert */}
            <article className="special-card">
              <img
                src={LemonDessert}
                alt="Lemon Dessert"
                className="special-card-image"
              />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3 className="special-card-title">Lemon Dessert</h3>
                  <span className="special-card-price">$5.00</span>
                </div>
                <p className="special-card-description">
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <div className="special-card-footer">
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a href="#" className="delivery-link">
                    Order a delivery 🚴
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials section"
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <h2 id="testimonials-heading">What Our Customers Say</h2>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <article className="testimonial-card">
              <div className="testimonial-rating">
                <span className="rating-number">5/5</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
              <img src={JohnD} alt="John D." className="testimonial-avatar" />
              <h4 className="testimonial-name">John D.</h4>
              <p className="testimonial-text">
                "Absolutely loved it! The food was delicious and the service was
                top notch!"
              </p>
            </article>

            {/* Testimonial 2 */}
            <article className="testimonial-card">
              <div className="testimonial-rating">
                <span className="rating-number">5/5</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
              <img src={JaneS} alt="Jane S." className="testimonial-avatar" />
              <h4 className="testimonial-name">Jane S.</h4>
              <p className="testimonial-text">
                "Amazing experience! I highly recommend the Greek Salad!"
              </p>
            </article>

            {/* Testimonial 3 */}
            <article className="testimonial-card">
              <div className="testimonial-rating">
                <span className="rating-number">4/5</span>
                <span className="stars">⭐⭐⭐⭐</span>
              </div>
              <img src={BobJ} alt="Bob J." className="testimonial-avatar" />
              <h4 className="testimonial-name">Bob J.</h4>
              <p className="testimonial-text">
                "Great Mediterranean food with authentic flavors. A bit crowded
                on weekends."
              </p>
            </article>

            {/* Testimonial 4 */}
            <article className="testimonial-card">
              <div className="testimonial-rating">
                <span className="rating-number">5/5</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
              <img src={AliceW} alt="Alice W." className="testimonial-avatar" />
              <h4 className="testimonial-name">Alice W.</h4>
              <p className="testimonial-text">
                "The lemon dessert is to die for. Will definitely be back!"
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-content">
            <h2 id="about-heading">Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Based in Chicago, Illinois, Little Lemon is a family-owned
              Mediterranean restaurant that focuses on traditional recipes
              served with a modern twist.
            </p>
            <p>
              The chefs draw inspiration from Italian, Greek, and Turkish
              culture and have a menu that changes with the seasons.
            </p>
            <p>
              Founded by brothers Mario and Adrian, our restaurant brings
              decades of family culinary tradition to the heart of Chicago. We
              pride ourselves on using locally sourced ingredients and
              time-honored techniques.
            </p>
          </div>
          <div className="about-image">
            <div className="image-stack">
              <img
                src={chefs}
                alt="Little Lemon restaurant chefs cooking"
                className="image-back"
              />
              <img
                src={dining}
                alt="Diners enjoying Little Lemon restaurant"
                className="image-front"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
