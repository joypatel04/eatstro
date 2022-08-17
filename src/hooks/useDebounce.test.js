import { renderHook } from "@testing-library/react-hooks";

import { useDebounce } from "./useDebounce";

test("should use debounce with expected 1 (Number)", () => {
  const { result } = renderHook(() => useDebounce(1));
  expect(result.current).toBe(1);
});

test("should use debounce with expected EATSTRO (String)", () => {
  const { result } = renderHook(() => useDebounce("EATSTRO"));
  expect(result.current).toBe("EATSTRO");
});
