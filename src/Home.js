import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://media-exp1.licdn.com/dms/image/C561BAQHeZ8QMd0XWkg/company-background_10000/0/1592287484700?e=2147483647&v=beta&t=21NazMcYrzOdZ6Cd9v2bQc4GZglvKnJo7yVVEkXoICk"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="BITSians Key ring : The ring to hold all your earned success"
            price={99.00}
            rating={4}
            image="https://i3.cpcache.com/merchandise/874_300x300_Front_Color-Silver.jpg?Size=NA&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:1.405,%22height%22:1.405,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:7,%22crop_y%22:3,%22crop_h%22:281,%22crop_w%22:277,%22scale%22:0.47359455,%22template%22:{%22id%22:79632716,%22params%22:{}}}&cid=PUartJBjiF%2Fyg4FdKqiggQ%3D%3D+%7C%7C+%2BZxFEWHLtbNhHE7fY6wftA%3D%3D%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]"
          />
          <Product
            id="49538094"
            title="Campus Hoodie : Available in all types of size (S, M, L, XL, XXL, Customizable)"
            price={800}
            rating={5}
            image="https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1rJ68NtSES.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Pilani Campus Graduation Ring : Customized with your ID number"
            price={5000}
            rating={5}
            image="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-9/15780754_1827438620802300_4426767203180883320_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Oh6WhrDfJIoAX-R_s0_&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_X_0johUtQL5fzMwGZHNq5RcaJDAu7h9PAIxaym0GkJg&oe=62C14A05"
          />
          <Product
            id="23445930"
            title="Cotton Hoodie for Unisex"
            price={988.99}
            rating={4}
            image="https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_navy_blue_hoodie.jpg"
          />
          <Product
            id="3254354345"
            title="Tech Tattoo"
            price={99.99}
            rating={3}
            image="https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_tech_tattoo_1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="TShirt with Customized Name"
            price={694.98}
            rating={4}
            image="https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_pilani_montage_t_shirt_navy_blue.jpg"
          />
          <Product
            id="32543543"
            title="NoteBook"
            price={40.}
            rating={3}
            image="https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_diary_navy_blue_1.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
