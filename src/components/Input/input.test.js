import { render, screen, fireEvent } from "@testing-library/react-native";

import Input from "./index";

test("Fire changeText event on Input", () => {
  const onEventMock = jest.fn();
  render(
    // MyComponent renders TextInput which has a placeholder 'Enter details'
    // and with `onChangeText` bound to handleChangeText
    <Input onChangeText={onEventMock} />
  );

  fireEvent(
    screen.getByPlaceholderText("Search something..."),
    "onChangeText",
    "Burger"
  );
  expect(onEventMock).toHaveBeenCalledWith("Burger");
});
