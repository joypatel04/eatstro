import Svg, { Path } from "react-native-svg";

import { SvgLogoProps } from "~/types";

const FavouriteLogo = ({ color, width, height }: SvgLogoProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z"
      fill={color}
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 8C17.0653 8.3403 17.8222 9.2967 17.9168 10.422L16 8Z"
      fill="white"
    />
    <Path
      d="M16 8C17.0653 8.3403 17.8222 9.2967 17.9168 10.422"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default FavouriteLogo;
