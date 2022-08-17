import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      PRIMARY_COLOR: string;
      WHITE: string;
      TITLE_COLOR: string;
      SHADOW_COLOR: string;
      BORDER_COLOR: string;
      ICON_COLOR: string;
    };

    // Fonts
    FONTS: {
      DMSans_M: string;
      DMSans: string;
      Able: string;
    };
  }
}
