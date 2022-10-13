function Password(props) {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M2 2h20v20H2V2z" fill="#fff" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.664 3.5C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.164 4.416h8.668c2.532 0 4.168-1.733 4.168-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416h-8.67zM16.332 22H7.664C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.664 2h8.67C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.332 22z"
          fill="#130F26"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.838 10.898a1.103 1.103 0 00-.002 2.204c.607 0 1.102-.494 1.102-1.102 0-.607-.494-1.1-1.1-1.102zm-.002 3.704A2.605 2.605 0 016.234 12a2.605 2.605 0 012.602-2.602A2.605 2.605 0 0111.438 12a2.605 2.605 0 01-2.602 2.602z"
        fill="#130F26"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.01 14.602a.75.75 0 01-.75-.75v-1.103H10.69a.75.75 0 110-1.5h6.318a.75.75 0 01.75.75v1.853a.75.75 0 01-.75.75z"
        fill="#130F26"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.182 14.602a.75.75 0 01-.75-.75v-1.853a.75.75 0 011.5 0v1.853a.75.75 0 01-.75.75z"
        fill="#130F26"
      />
    </svg>
  );
}

export default Password;
