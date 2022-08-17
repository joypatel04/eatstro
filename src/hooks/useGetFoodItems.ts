import { QueryStatus } from "@tanstack/react-query";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

import { useDebounce } from "./useDebounce";

import { IAdditionalFilter } from "~/constants";
import { Item as IFoodItem, useGetFoodItemsQuery } from "~/generated/graphql";
import { useStore } from "~/store";
import client from "~/utils/client";

export const useGetFoodItems = (): {
  searchName: string;
  setSearchName: Dispatch<SetStateAction<string>>;
  setAdditionalFilters: Dispatch<SetStateAction<IAdditionalFilter>>;
  status: QueryStatus;
  items: IFoodItem[] | [];
  error: unknown;
  isFetching: boolean;
} => {
  const addToSuggestions = useStore((state) => state.addToSuggestions);

  const [searchName, setSearchName] = useState<string>("");
  const [additionalFilters, setAdditionalFilters] = useState<IAdditionalFilter>(
    {
      dietaryChoice: null,
      cuisineType: null,
      costRange: null,
    }
  );
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
      dietaryChoice: additionalFilters?.dietaryChoice || "",
      cuisineType: additionalFilters?.cuisineType || "",
      priceGte: additionalFilters?.costRange?.[0] || null,
      priceLte: additionalFilters.costRange?.[1] || null,
    },
    {
      queryKey: ["getFoodItemQueryKey", debouncedValue],
      // Added initialCall logic just to give better experience since the data is keep on changing on every call,
      // UI flickers a lot and It's doesn't look good. Else, It's not required in real life use-case.
      enabled: initialCall
        ? true
        : Boolean(debouncedValue) ||
          Boolean(additionalFilters?.costRange) ||
          Boolean(additionalFilters?.cuisineType) ||
          Boolean(additionalFilters.dietaryChoice),
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
    setAdditionalFilters,
    status,
    items: data?.items as IFoodItem[],
    error,
    isFetching,
  };
};
