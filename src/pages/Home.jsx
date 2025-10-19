import React from "react";
import "./Home.css";
import banner1 from "../assets/slider1.png";
import banner2 from "../assets/slider2.jpg";
import birthday from "../assets/Birthday_gifts.jpg";
import holiday from "../assets/Holiday_gifts.jpg";
import aniversary from "../assets/Aniversary_gifts.jpg";
import personalized from "../assets/Personalized_gifts.jpg";
import leaves from "../assets/leaves.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import copy from "../assets/copy.png";
import lady from "../assets/lady.png";
import gift from "../assets/surprise.png";
import cele from "../assets/celebration.png";
import rate from "../assets/rating.png";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ backgroundColor: "rgba(236,202,193,0.7)", height: "100vh" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active containter-fluid ">
            <div className="row poition-realtive">
              <img src={leaves} alt="leaves" className="leaves-bg " />

              <div className="col-lg-5 col-md-6 col-sm-12 a">
                <div className="content1 ">
                  <p className="leftD">Discover</p>
                  <h1 className="left">
                    The Romance in <br />
                    Browsing Jewellary
                  </h1>
                  <Link to="/shop">
                    <button className="shop w-50 top">SHOP NOW</button>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 img">
                <div className="img1">
                  <img
                    src={banner1}
                    className="d-block w-100  slide1 img-fluid right"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 slide2" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row g-4 justify-content-center py-5">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <Card
                image={birthday}
                title="Birthday Gifts"
                description="Enjoy the beauty of birthday"
                buttonText="Birthday Gifts"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <Card
                image={holiday}
                title="Holiday Gifts"
                description="Discover new destinations."
                buttonText="Holiday Gifts"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <Card
                image={aniversary}
                title="Aniversary Gifts"
                description="Delicious and healthy relation."
                buttonText="Aniversary Gifts"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <Card
                image={personalized}
                title="Personalized Gifts"
                description="Creative expressions and inspiration."
                buttonText="Personalized Gifts"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid outer">
        <div className="happy">
          <h1>We deliver happiness</h1>
          <div className="happy-content">
            <aside>
              <img src={copy} alt="Gift" className="copy" />
            </aside>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ color: "gray" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
          </div>
          <div className="happy-content">
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ color: "gray" }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
            <aside>
              <img src={lady} alt="Gift" className="copy" />
            </aside>
          </div>
        </div>

        <div className="quality">
          <div className="card">
            <img src={gift} alt="" />
            <h2 style={{ paddingTop: "4vh" }}>Delivering quality gifts</h2>
            <p>Information on its origins</p>
          </div>
          <div className="card">
            <img src={rate} alt="" />
            <h2 style={{ paddingTop: "4vh" }}>Gifts for all occasions</h2>
            <p>Variants and technical</p>
          </div>
          <div className="card">
            <img src={cele} alt="" />
            <h2 style={{ paddingTop: "4vh" }}>Great customer service</h2>
            <p>Random Lipsum generator</p>
          </div>
          <div
            className="card"
            style={{
              backgroundImage: `url("xyz.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="white">
              <p>Holiday Offers</p>
              <h2>Sale 50% off</h2>
              <p>Code: Jatin12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
