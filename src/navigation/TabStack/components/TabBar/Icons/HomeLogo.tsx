import Svg, { Path } from "react-native-svg";

import { SvgLogoProps } from "~/types";

const HomeLogo = ({ color, width, height }: SvgLogoProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 14.3054L18.7833 19.1507L18.9271 24C16.3715 22.7069 13.8958 22.0603 11.5 22.0603C9.10417 22.0603 6.62847 22.7069 4.07292 24L4.21667 19.1507L11.5 14.3054ZM11.5 0C13.6479 0 15.5206 1.19179 16.5079 2.95758C16.7507 2.92591 16.9984 2.90956 17.25 2.90956C20.4256 2.90956 23 5.51487 23 8.72869C23 11.44 21.1677 13.7181 18.688 14.3644L18.7861 17.6661L11.5 12.8506L8.43333 14.8774V12.8506H7.1875V15.7008L4.21394 17.6661L4.31208 14.3644C1.83227 13.7182 0 11.44 0 8.72869C0 5.51487 2.57437 2.90956 5.75 2.90956C6.00153 2.90956 6.24929 2.92591 6.49229 2.9576C7.47938 1.19179 9.35216 0 11.5 0Z"
      fill={color}
    />
  </Svg>
);

export default HomeLogo;
