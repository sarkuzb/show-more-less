import { useState } from "react";

function ShowMoreLess() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div className="m-10 border-2 rounded-xl w-96 flex flex-col items-center">
        <p className="bg-slate-200 w-72 p-2 m-4 rounded-md relative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span
            className={`long-text ${
              collapse ? "expanded" : ""
            } transition-all duration-0 ease-in-out`}
          >
            Dolor sequi aliquid explicabo quibusdam voluptas tempora qui sint,
            illum facere aperiam est accusantium eum, consequuntur obcaecati
            provident, perspiciatis magni ullam! Vel?
          </span>
        </p>
        <div className="flex pb-2 items-start w-72">
          <div className="bg-slate-200 p-2 rounded-md mb-2 w-28 flex justify-center">
            <button onClick={() => setCollapse((prevItem) => !prevItem)}>
              {collapse ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowMoreLess;
