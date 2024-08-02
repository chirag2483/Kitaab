import React, { useRef, useState } from "react";
import AddCart from "./AddCart";
function Cards({ item }) {
  const [pop, setPop] = useState(false);

  return (
    <>
      {pop && <AddCart item={item}/>}
      <div className="mt-4 my-3 p-3 z-0 h-124 box-border flex">
        <div className=" bg-base-100 card w-full shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="w-full">
            <img src={item.image} alt="Shoes" className="h-64" />
          </figure>
          <div className="card-body w-full flex gap-2">
            <h2 className="card-title  flex justify-between">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between gap-2">
              <div className="badge badge-outline">${item.price}</div>
              <a
                onClick={() => {
                  setPop(!pop);
                  console.log(pop);
                }}
              >
                <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  Buy Now
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
