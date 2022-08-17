import { QueryStatus } from "@tanstack/react-query";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Item, useGetFoodItemsQuery } from "~/generated/graphql";
import client from "~/utils/client";
import { useDebounce } from "./useDebounce";
import { useStore } from "~/store";

export const useGetFoodItems = (): {
  searchName: string;
  setSearchName: Dispatch<SetStateAction<string>>;
  status: QueryStatus;
  items: Item[] | [];
  error: unknown;
  isFetching: boolean;
} => {
  const addToSuggestions = useStore((state) => state.addToSuggestions);

  const [searchName, setSearchName] = useState<string>("");
  const [initialCall, setInitialCall] = useState<boolean>(true);
  const debouncedValue = useDebounce(searchName, 1000);

  useEffect(() => {
    setTimeout(() => {
      setInitialCall(false);
    }, 200);
  }, []);

  const { status, data, error, isFetching } = useGetFoodItemsQuery(
    client,
    {
      isPublished: false,
      name: debouncedValue,
    },
    {
      queryKey: ["getFoodItemQueryKey", debouncedValue],
      enabled: initialCall ? true : Boolean(debouncedValue),
      onSuccess: () => {
        if (debouncedValue.length) {
          addToSuggestions(debouncedValue);
        }
      },
    }
  );

  return {
    searchName,
    setSearchName,
    status,
    items: data?.items as Item[],
    error,
    isFetching,
  };
};
