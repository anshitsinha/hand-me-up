"use client";

import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../firebase"; // Adjust the path as necessary
import { Product } from "./Product";


export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const q = query(collection(db, "products"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      let fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className=" mx-auto  flex flex-wrap justify-center ">
      {data.map((product) => (
        <Product key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
}
