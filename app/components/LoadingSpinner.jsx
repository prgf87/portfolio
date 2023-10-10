import React from 'react';
import { TailSpin } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="w-full flex justify-center items-center py-0 z-20">
      <TailSpin
        height="50"
        width="50"
        radius={2}
        color="#f1f5f9"
        ariaLabel="tail-spin-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
