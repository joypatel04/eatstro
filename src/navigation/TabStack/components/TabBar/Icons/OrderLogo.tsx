import Svg, { Path } from "react-native-svg";
import { ColorValue } from "react-native";

type OrderLogoProps = {
  color: ColorValue;
  width: number;
  height: number;
};

const OrderLogo = ({ color, width, height }: OrderLogoProps) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9086 2.74979C15.9086 2.74979 8.2316 2.75379 8.2196 2.75379C5.4596 2.77079 3.7506 4.58679 3.7506 7.35679V16.5528C3.7506 19.3368 5.4726 21.1598 8.2566 21.1598C8.2566 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35679C20.4156 4.57279 18.6926 2.74979 15.9086 2.74979Z"
      fill={color}
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.7157 16.2234H8.49572"
      stroke="#FFFEFE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.7157 12.0369H8.49572"
      stroke="#FFFEFE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.2517 7.86014H8.4967"
      stroke="#FFFEFE"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default OrderLogo;
