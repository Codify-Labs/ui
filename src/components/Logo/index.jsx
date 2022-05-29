import { Link } from "react-router-dom";

function Logo(props) {
  const logoClassName = ["h-6", props.className].join(" ");

  return (
    <Link className="fc" to={`/`}>
      <svg
        viewBox="0 0 40 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={logoClassName}
      >
        <rect
          x="32.4196"
          y="1.4516"
          width="6.12903"
          height="6.12903"
          stroke="#017AFF"
          stroke-width="0.322581"
        />
        <rect x="33.5483" width="6.45161" height="6.45161" fill="#017AFF" />
        <rect
          x="0.16129"
          y="1.4516"
          width="25.4839"
          height="6.12903"
          stroke="#05192D"
          stroke-width="0.322581"
        />
        <rect
          x="11.7741"
          y="11.7742"
          width="25.4839"
          height="6.12903"
          stroke="#05192D"
          stroke-width="0.322581"
        />
        <rect x="2.58057" width="25.8065" height="6.45161" fill="#05192D" />
        <rect
          x="14.1934"
          y="10.3226"
          width="25.8065"
          height="6.45161"
          fill="#05192D"
        />
      </svg>

      <p className="pl-2 text-2xl font-bold | text-gray-primary">codify</p>
    </Link>
  );
}

export default Logo;
