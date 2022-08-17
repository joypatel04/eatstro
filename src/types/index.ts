import { ReactElement } from "react";
import {
  ColorValue,
  PressableProps,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

import { Item } from "~/generated/graphql";
export interface AnimatedPressableProps extends PressableProps {
  Icon?: ReactElement<unknown, string>;
  style?: StyleProp<ViewStyle>;
  enableEnterAnimation?: boolean;
  enterAnimationDelay?: number;
}
export interface IAdditionalFilter {
  dietaryChoice: string | null;
  cuisineType: string | null;
  costRange: [number, number] | null;
}
export interface IParentFilters {
  id: string;
  displayText: string;
  key: "cost" | "dietary" | "cuisines";
}
export interface IChoices extends IParentFilters {
  value: string;
}
export interface ICost {
  id: string;
  displayText: string;
  value: [number, number];
  key: string;
}

export type IActiveFilter = "cost" | "dietary" | "cuisines";
export interface IFilters {
  cost?: ICost | undefined;
  dietary?: IChoices | undefined;
  cuisines?: IChoices | undefined;
}

export type IFilterTypeProps = {
  isActive: boolean;
  type: string;
  onPress: () => void;
  filters: IFilters | undefined;
  filterKey: IActiveFilter;
};

export type IChoiceTypeProps = {
  choice: IChoices | ICost;
  activeFilter: IActiveFilter;
  onPress: () => void;
  filters: IFilters | undefined;
};

export type IFilterBottomSheetProps = {
  onCloseBottomSheet: () => void;
  onApplyFilter: (filter: IFilters) => void;
};

export type SvgLogoProps = {
  color: ColorValue;
  width: number;
  height: number;
};

export type IEmptyListProps = {
  searchName: string;
};

export type IFoodListItemProps = {
  item: Item;
};

export type ISearchSuggestionsProps = {
  headerHeight: number;
  insets: EdgeInsets;
  onCloseSuggestions: () => void;
  onSelectSuggestions: (value: string) => void;
};

export type ISearchSectionProps = {
  inputProps: TextInputProps;
  onPressFilterButton: () => void;
};
export interface IStore {
  suggestions: string[];
  addToSuggestions: (suggestion: string) => void;
  removeFromSuggestions: (suggestion: string) => void;
  clearSuggestions: () => void;
}
export interface ILine {
  x: number;
  y: number;
}
export interface DotIconProps {
  size: number;
  color: string;
}
