import React from 'react';

function Total({ total, className, updateTotal, updateAssetsTotal }) {

  // if (updateTotal) {
  //   updateTotal()
  // }

  return (
    <div
      className={className ? `label total ${className}` : `label total`}>
      {total}
    </div>
  )
}

export default Total;
