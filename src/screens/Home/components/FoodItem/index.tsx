import { Entypo } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { useCallback, useState, useMemo, memo } from "react";
import { useWindowDimensions } from "react-native";
import FastImage from "react-native-fast-image";
import Toast from "react-native-toast-message";
import styled from "styled-components/native";

import { AnimatedPressable } from "~/components";
import { Item as IFoodItem } from "~/generated/graphql";

const FoodItem = ({ item }: { item: IFoodItem }) => {
  const { width } = useWindowDimensions();
  const [favouriteCount, setFavouriteCount] = useState<number>(
    item?.favoriteCount || 0
  );

  const [assets] = useAssets([
    require("assets/paleo.webp"),
    require("assets/calorie-fire.webp"),
    require("assets/pepper-active.webp"),
    require("assets/pepper-inactive.webp"),
    require("assets/heart.webp"),
  ]);

  const AddIcon = <Entypo name="plus" size={24} color="white" />;
  const HeartIcon = <Icon source={{ uri: assets?.[4]?.uri || "" }} />;

  const onAddToCart = useCallback(() => {
    // TO-DO: Figure out something on how to handle multiple add to cart, while a toast it already presented
    Toast.show({
      type: "success",
      text1: "Added to Cart",
    });
  }, []);

  const onAddToFavourite = useCallback(() => {
    const randomNumber =
      Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1);
    if (favouriteCount + randomNumber < 0) {
      setFavouriteCount(favouriteCount - randomNumber);
      return;
    }
    setFavouriteCount(favouriteCount + randomNumber);
  }, [favouriteCount]);

  const containerStyle = useMemo(
    () => ({
      width: width - 32, // Value 32 is total padding on both side.
    }),
    [width]
  );

  const foodItemImage = useMemo(() => item?.photo || "", [item?.photo]);

  return (
    <Container style={[containerStyle]}>
      <TopSection>
        <Image source={{ uri: foodItemImage }} />
        <FavouriteContainer>
          <FavouriteText>{favouriteCount}</FavouriteText>
          <FavouriteIcon Icon={HeartIcon} onPress={onAddToFavourite} />
        </FavouriteContainer>
        <AddButton Icon={AddIcon} onPress={onAddToCart} />
      </TopSection>
      <Section>
        <DetailSection>
          <FoodDetailContainer>
            <PrimaryText>{item.name}</PrimaryText>
          </FoodDetailContainer>
          <PaleoIcon source={{ uri: assets?.[0]?.uri || "" }} />
        </DetailSection>
        <DetailCenterSection>
          <Icon source={{ uri: assets?.[1]?.uri || "" }} />
          <SecondaryText>749 kcal</SecondaryText>
        </DetailCenterSection>
        <Description>
          {/* Homemade beef cutlet with signature sauce with parmesan and mustard
          will not leave you indifferent... */}
          {item.desc}
          <SecondaryText>{` • ${item.cuisineType} • ${item.dietaryChoice}`}</SecondaryText>
        </Description>
        <DetailSection>
          <PrimaryText>{`$${item.price} `}</PrimaryText>
          <SpicyMeter>
            <Icon source={{ uri: assets?.[2]?.uri || "" }} />
            <Icon source={{ uri: assets?.[3]?.uri || "" }} />
            <Icon source={{ uri: assets?.[3]?.uri || "" }} />
          </SpicyMeter>
        </DetailSection>
      </Section>
    </Container>
  );
};

const areEqual = (
  prevProps: Readonly<{ item: IFoodItem }>,
  nextProps: Readonly<{ item: IFoodItem }>
) => {
  const {
    item: { id },
  } = nextProps;
  const {
    item: { id: prevId },
  } = prevProps;

  /*if the props are equal, it won't update, In our case id will never change so it won't update*/
  const isSelectedEqual = id === prevId;

  return isSelectedEqual;
};

const MemoizedFoodItem = memo(FoodItem, areEqual);

export default MemoizedFoodItem;

const Container = styled.Pressable`
  background-color: ${(props) => props.theme.COLORS["WHITE"]};
  height: 280px;
  border-radius: 16px;
  margin-bottom: 12px;
  margin-right: 12px;
`;

const TopSection = styled.View`
  border-radius: 16px;
  overflow: hidden;
`;

const Image = styled(FastImage)`
  width: auto;
  height: 140px;
`;

const FavouriteContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const FavouriteText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.COLORS["WHITE"]};
  font-weight: 700;
  margin-right: 8px;
`;

const FavouriteIcon = styled(AnimatedPressable)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const AddButton = styled(AnimatedPressable)`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.COLORS["PRIMARY_COLOR"]};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-top-left-radius: 25px;
`;

const Section = styled.View`
  padding: 16px;
`;

const DetailSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 5px;
`;

const FoodDetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PrimaryText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
  font-weight: 700;
`;

const Description = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
`;

const DetailCenterSection = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;

const SecondaryText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  opacity: 0.5;
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
  margin-left: 6.75px;
`;

const SpicyMeter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 56px;
`;

const Icon = styled(FastImage)`
  width: 16px;
  height: 16px;
`;

const PaleoIcon = styled(FastImage)`
  width: 24px;
  height: 24px;
`;
