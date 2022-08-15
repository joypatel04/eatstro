import { View, Image } from "react-native";
import { useAssets } from "expo-asset";
import styled from "styled-components/native";
import { SvgUri } from "react-native-svg";
import FavouriteLogo from "~/navigation/TabStack/components/TabBar/Icons/FavouriteLogo";

const FoodItem = ({ item }: { item: any }) => {
  const [assets] = useAssets([
    require("assets/paleo.svg"),
    require("assets/calorie-fire.svg"),
    require("assets/pepper-active.svg"),
    require("assets/pepper-inactive.svg"),
    require("assets/heart.svg"),
  ]);
  return (
    <Container>
      <View>
        <Image
          style={{ width: "auto", height: 140, borderRadius: 16 }}
          source={{ uri: item.photo }}
        />
        <FavouriteContainer>
          <FavouriteText>{item.favoriteCount}</FavouriteText>
          <FavouriteIcon>
            <SvgUri width={16} height={16} uri={assets?.[4]?.uri || ""} />
          </FavouriteIcon>
        </FavouriteContainer>
      </View>
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

const FavouriteIcon = styled.Pressable`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
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
