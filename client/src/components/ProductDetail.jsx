import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setproduct] = useState();
  const [user, setuser] = useState();
  console.log(user, "userrrrr");
  const p = useParams();

  useEffect(() => {
    const url = "http://localhost:4000" + "/products/" + p.productId;
    axios
      .get(url)
      .then((res) => {
        if (res.data.product) {
          setproduct(res.data.product);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleContact = (addedBy) => {
  //     console.log('id', addedBy)
  //     const url = 'http://localhost:4000' + '/get-user/' + addedBy;
  //     axios.get(url)
  //         .then((res) => {
  //             if (res.data.user) {
  //                 setuser(res.data.user)
  //             }
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //         })
  // }

  const handleContactButtonClick = () => {
    window.open(
      `https://wa.me/91${product.contact}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Header />
      <div>
        {product && (
          <div className="productWrapper">
            <div className="productDetailImage">
              <img
                width="400px"
                height="200px"
                src={"http://localhost:4000" + "/" + product.pimage}
                alt=""
              />
              {product.pimage2 && (
                <img
                  width="400px"
                  height="200px"
                  src={"http://localhost:4000" + "/" + product.pimage2}
                  alt=""
                />
              )}
            </div>
            <div className="productInfo">
              <div className="productTitle">{product.pname}</div>

              <div> ₹ {product.price} /- </div>
              <p className="m-2"> {product.category} </p>
              <p className="m-2 text-success"> Description: {product.pdesc} </p>
              <p className="m-2 text-success">{product.contact} </p>
              <button onClick={handleContactButtonClick} id="sendButton">
                Contact
              </button>

              {/* {product.addedBy &&
                        <button onClick={() => handleContact(product.addedBy)}>
                            SHOW CONTACT DETAILS
                        </button>} */}
              {/* {user && user.username && <h4>{user.username}</h4>}
                    {user && user.mobile && <h3>{user.mobile}</h3>}
                    {user && user.email && <h6>{user.email}</h6>} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
