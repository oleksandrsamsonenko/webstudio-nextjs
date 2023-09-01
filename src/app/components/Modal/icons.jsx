export const User = ({ styleProp }) => {
  return (
    <svg width={18} height={18} className={styleProp}>
      <g clipPath="url(#a)">
        <path d="M9 9a3 3 0 1 0 0-6 3 3 0 1 0 0 6Zm0 1.5c-2.003 0-6 1.005-6 3v.75c0 .412.337.75.75.75h10.5c.412 0 .75-.338.75-.75v-.75c0-1.995-3.998-3-6-3Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Phone = ({ styleProp }) => {
  return (
    <svg width={18} height={18} className={styleProp}>
      <g clipPath="url(#a)">
        <path d="m13.996 11.123-1.838-.21a1.44 1.44 0 0 0-1.187.412l-1.332 1.332a10.888 10.888 0 0 1-4.769-4.77L6.21 6.55a1.44 1.44 0 0 0 .413-1.187l-.21-1.824a1.448 1.448 0 0 0-1.44-1.28H3.72c-.818 0-1.498.68-1.448 1.498.384 6.18 5.326 11.115 11.5 11.499.817.05 1.498-.63 1.498-1.448v-1.251a1.434 1.434 0 0 0-1.274-1.433Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Email = ({ styleProp }) => {
  return (
    <svg width={18} height={18} className={styleProp}>
      <g clipPath="url(#a)">
        <path d="M15 3H3c-.825 0-1.492.675-1.492 1.5l-.008 9c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5Zm-.3 3.188L9.398 9.502a.759.759 0 0 1-.796 0L3.3 6.188a.637.637 0 1 1 .675-1.08L9 8.25l5.025-3.143a.637.637 0 1 1 .675 1.08Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Close = ({ styleProp }) => {
  return (
    <svg width={18} height={18} className={styleProp}>
      <path d="M15 4.108 13.892 3 9.5 7.392 5.108 3 4 4.108 8.392 8.5 4 12.892 5.108 14 9.5 9.608 13.892 14 15 12.892 10.608 8.5 15 4.108Z" />
    </svg>
  );
};
