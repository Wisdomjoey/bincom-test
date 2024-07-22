export const AddIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    className={className}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title></title>{" "}
      <g id="Complete">
        {" "}
        <g data-name="add" id="add-2">
          {" "}
          <g>
            {" "}
            <line
              fill="none"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="12"
              x2="12"
              y1="19"
              y2="5"
            ></line>{" "}
            <line
              fill="none"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="5"
              x2="19"
              y1="12"
              y2="12"
            ></line>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

export const BackIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M6 12H18M6 12L11 7M6 12L11 17"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);
