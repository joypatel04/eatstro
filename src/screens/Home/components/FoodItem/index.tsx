import { useCallback, useState } from "react";
import { useAssets } from "expo-asset";
import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import Toast from "react-native-toast-message";
import { SvgUri } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { AnimatedPressable } from "~/components";

const FoodItem = ({ item }: { item: any }) => {
  const [favouriteCount, setFavouriteCount] = useState<number>(
    item.favoriteCount
  );

  const [assets] = useAssets([
    require("assets/paleo.svg"),
    require("assets/calorie-fire.svg"),
    require("assets/pepper-active.svg"),
    require("assets/pepper-inactive.svg"),
    require("assets/heart.svg"),
  ]);

  const AddIcon = <Entypo name="plus" size={24} color="white" />;
  const HeartIcon = (
    <SvgUri width={16} height={16} uri={assets?.[4]?.uri || ""} />
  );

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

  return (
    <Container>
      <TopSection>
        <Image
          style={{ width: "auto", height: 140 }}
          source={{ uri: item.photo }}
        />
        <FavouriteContainer>
          <FavouriteText>{favouriteCount}</FavouriteText>
          <FavouriteIcon Icon={HeartIcon} onPress={onAddToFavourite} />
        </FavouriteContainer>
        <AddButton Icon={AddIcon} onPress={onAddToCart} />
      </TopSection>
      <Section>
        <DetailSection>
          <PrimaryText>{item.name}</PrimaryText>
          <SvgUri width={24} height={24} uri={assets?.[0]?.uri || ""} />
        </DetailSection>
        <DetailCenterSection>
          <SvgUri width={16} height={16} uri={assets?.[1]?.uri || ""} />
          <Calories>749 kcal</Calories>
        </DetailCenterSection>
        <Description>
          Homemade beef cutlet with signature sauce with parmesan and mustard
          will not leave you indifferent...
          {/* {item.desc} */}
        </Description>
        <DetailSection>
          <PrimaryText>{`$${item.price} `}</PrimaryText>
          <SpicyMeter>
            <SvgUri width={16} height={16} uri={assets?.[2]?.uri || ""} />
            <SvgUri width={16} height={16} uri={assets?.[3]?.uri || ""} />
            <SvgUri width={16} height={16} uri={assets?.[3]?.uri || ""} />
          </SpicyMeter>
        </DetailSection>
      </Section>
    </Container>
  );
};

export default FoodItem;

const Container = styled.Pressable`
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 12px;
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
  color: #fff;
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
  background-color: #f16b59;
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

const PrimaryText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #222b32;
  font-weight: 700;
`;

const Description = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #222b32;
`;

const DetailCenterSection = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;

const Calories = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  opacity: 0.5;
  color: #222b32;
  margin-left: 6.75px;
`;

const SpicyMeter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 56px;
`;
