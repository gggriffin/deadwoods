import React from "react";

export const InfoTile = (props) => {
  const { children } = props;
  return (
    <div className='bg-white bg-opacity-20 rounded-md p-4 text-center text-white font-main-content-text my-3 mx-9 lg:w-3/5'>
      {children}
    </div>
  );
};
