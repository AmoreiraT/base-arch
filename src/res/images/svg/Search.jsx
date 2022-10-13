function Search(props) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M2 2h19.477v19.477H2V2z" fill="#fff" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738c0 4.543 3.696 8.239 8.239 8.239 4.542 0 8.238-3.696 8.238-8.239 0-4.543-3.696-8.238-8.238-8.238zm0 17.977C6.369 21.477 2 17.108 2 11.738 2 6.368 6.369 2 11.739 2c5.37 0 9.738 4.368 9.738 9.738 0 5.37-4.368 9.739-9.738 9.739z"
          fill="#130F26"
        />
      </g>
      <mask
        id="prefix__b"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={17}
        y={17}
        width={6}
        height={6}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.238 17.707h5.024v5.015h-5.024v-5.015z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.512 22.722a.75.75 0 01-.53-.22L17.46 18.99a.75.75 0 011.06-1.063l3.524 3.515a.749.749 0 01-.53 1.28z"
          fill="#130F26"
        />
      </g>
    </svg>
  );
}

export default Search;
