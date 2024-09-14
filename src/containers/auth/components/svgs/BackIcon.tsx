import { pxToRem } from '@/theme';
import React from 'react'

export function BackIcon() {
  return (
    <svg
      width={pxToRem(20)}
      height={pxToRem(20)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5004 17.225C12.3421 17.225 12.1837 17.1667 12.0587 17.0417L6.62539 11.6083C5.74206 10.725 5.74206 9.27502 6.62539 8.39168L12.0587 2.95835C12.3004 2.71668 12.7004 2.71668 12.9421 2.95835C13.1837 3.20002 13.1837 3.60002 12.9421 3.84168L7.50872 9.27502C7.10872 9.67502 7.10872 10.325 7.50872 10.725L12.9421 16.1583C13.1837 16.4 13.1837 16.8 12.9421 17.0417C12.8171 17.1583 12.6587 17.225 12.5004 17.225Z"
        fill="#747677"
      />
    </svg>
  );
}
