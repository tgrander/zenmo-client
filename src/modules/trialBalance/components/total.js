import React from 'react';

function Total({ total, className }) {
  return (
    <div
      className={className ? `label total ${className}` : `label total`}>
      {total}
    </div>
  )
}

export default Total;
