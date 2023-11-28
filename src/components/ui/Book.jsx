import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "../Price";
import Ratings from "../ui/Rating";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 700);
    };
    return () => {
      mountedRef.current = false;
      // FOR THIS TO WORK ON LOCAL HOST MAKE SURE IT IS SET TO; mountedRef.current = true;
      // IF THIS IS ON; mountedRef.current = false, IT WILL WORK ON VERCEL IF NOT IT WILL NOT WORK.
    };
  }, [book.url]);

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" loading="lazy" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Ratings rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
