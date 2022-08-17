import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useAssets } from "expo-asset";
import { ReactElement } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import CartLogo from "./Icons/CartLogo";
import FavouriteLogo from "./Icons/FavouriteLogo";
import HomeLogo from "./Icons/HomeLogo";
import OrderLogo from "./Icons/OrderLogo";

import { AnimatedPressable } from "~/components";
import { NAVIGATION_BOTTOM_TABS_HEIGHT } from "~/constants";
import { DotIconProps } from "~/types";
import { defaultTheme } from "~/utils/theme";

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const onPress = (name: string) => {
    navigation.navigate(name);
  };

  const [assets] = useAssets([require("assets/profile.png")]);

  const getImage = (name: string): ReactElement | null => {
    switch (name) {
      case "Home":
        return (
          <HomeLogo
            width={24}
            height={24}
            color={
              state.index === 0
                ? defaultTheme.COLORS.PRIMARY_COLOR
                : defaultTheme.COLORS.ICON_COLOR
            }
          />
        );
      case "Favourite":
        return (
          <FavouriteLogo
            width={24}
            height={24}
            color={
              state.index === 1
                ? defaultTheme.COLORS.PRIMARY_COLOR
                : defaultTheme.COLORS.ICON_COLOR
            }
          />
        );
      case "Orders":
        return (
          <OrderLogo
            width={24}
            height={24}
            color={
              state.index === 3
                ? defaultTheme.COLORS.PRIMARY_COLOR
                : defaultTheme.COLORS.ICON_COLOR
            }
          />
        );
      case "Cart":
        return (
          <CartLogo width={24} height={24} color={defaultTheme.COLORS.WHITE} />
        );
      case "Profile":
        return <ProfileIcon size={24} source={{ uri: assets?.[0].uri }} />;
      default:
        return null;
    }
  };

  const Tabs = () => (
    <>
      {state?.routes?.map(({ name }, index) => {
        const Logo = () => getImage(name);
        if (name === "Cart") {
          const CartIcon = <Logo />;
          return (
            <CartButton
              key={name}
              style={styles.cartButton}
              Icon={CartIcon}
              onPress={() => onPress(name)}
            />
          );
        }
        return (
          <TabButton key={name} onPress={() => onPress(name)}>
            <Tab>
              <Logo />
              <Title
                color={
                  state.index === index
                    ? defaultTheme.COLORS.PRIMARY_COLOR
                    : defaultTheme.COLORS.ICON_COLOR
                }
              >
                {name}
              </Title>
              {state.index === index && (
                <DotIcon size={6} color={defaultTheme.COLORS.PRIMARY_COLOR} />
              )}
            </Tab>
          </TabButton>
        );
      })}
    </>
  );

  return (
    <Container>
      <Tabs />
    </Container>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    shadowColor: "#F44336",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 16,
  },
});

const Container = styled.View`
  flex-direction: row;
`;

const TabButton = styled.TouchableWithoutFeedback`
  flex: 1;
  height: ${NAVIGATION_BOTTOM_TABS_HEIGHT}px;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.View`
  flex: 1;
  height: ${NAVIGATION_BOTTOM_TABS_HEIGHT}px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${(props: { color: string }) => props.color};
  margin-top: 4px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
`;

const DotIcon = styled.Image`
  margin-top: 4px;
  width: ${(props: DotIconProps) => props.size}px;
  height: ${(props: DotIconProps) => props.size}px;
  border-radius: ${(props: DotIconProps) => props.size / 2}px;
  background-color: ${(props: DotIconProps) => props.color};
  position: absolute;
  bottom: 10px;
`;

const ProfileIcon = styled.Image`
  width: ${(props: { size: number }) => props.size}px;
  height: ${(props: { size: number }) => props.size}px;
  border-radius: ${(props: { size: number }) => props.size / 2}px;
`;

const CartButton = styled(AnimatedPressable)`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: ${(props) => props.theme.COLORS["PRIMARY_COLOR"]};
  justify-content: center;
  align-items: center;
  bottom: 40px;
`;

export default TabBar;
