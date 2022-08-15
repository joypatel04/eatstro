import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedAccordion, Header } from "~/components";

const Home = () => (
  <SafeAreaView edges={["top"]}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <AnimatedAccordion />
      </Container>
    </TouchableWithoutFeedback>
  </SafeAreaView>
);

const Container = styled.View`
  padding: 16px;
`;

export default Home;
