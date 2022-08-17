import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, act } from "@testing-library/react-hooks";

import { useGetFoodItems } from "./useGetFoodItems";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("should useGetFoodItems to get search state", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useGetFoodItems(), {
    wrapper,
  });

  act(() => {
    result.current.setSearchName("Burger");
  });

  await waitForNextUpdate();

  expect(result.current.searchName).toBe("Burger");
});

test("should useGetFoodItems to get data from hook and update status === 'success", async () => {
  const { result, waitForValueToChange } = renderHook(() => useGetFoodItems(), {
    wrapper,
  });

  await waitForValueToChange(() => result.current.status === "success", {
    timeout: 20000,
  });

  console.log("API CALL RESULT", result.current?.items?.slice(0, 1));

  if (result.current.status === "error") {
    console.log("IF ERROR TEST FAILS --------");
    console.log("API CALL ERROR", result.current.status, result.current.error);
  }

  expect(result.current.status).toBe("success");
});

test("should useGetFoodItems to make API Call and update status === 'loading", async () => {
  const { result, waitForValueToChange } = renderHook(() => useGetFoodItems(), {
    wrapper,
  });

  act(() => {
    result.current.setSearchName("Burger");
  });

  await waitForValueToChange(() => result.current.status === "loading");

  console.log("WHEN API CALL IS FAST THIS TEST FAILS --------");

  expect(result.current.status).toBe("loading");
});
