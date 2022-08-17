import { IChoices, ICost, IParentFilters } from "~/types";

export const NAVIGATION_BOTTOM_TABS_HEIGHT = 96;

export const DIETARY_CHOICE_MAP: IChoices[] = [
  {
    id: "1",
    displayText: "Vegan",
    value: "Vegan",
    key: "dietary",
  },
  {
    id: "2",
    displayText: "Lactose Free",
    value: "Lactose Free",
    key: "dietary",
  },
  {
    id: "3",
    displayText: "Vegetarian",
    value: "Vegetarian",
    key: "dietary",
  },
  {
    id: "4",
    displayText: "Gluten Free",
    value: "Gluten Free",
    key: "dietary",
  },
];

export const COST_CHOICE_MAP: ICost[] = [
  {
    id: "5",
    displayText: "$0 - $50",
    value: [0, 50],
    key: "cost",
  },
  {
    id: "6",
    displayText: "$50 - $100",
    value: [50, 100],
    key: "cost",
  },
  {
    id: "7",
    displayText: "$100 - $150",
    value: [100, 150],
    key: "cost",
  },
  {
    id: "8",
    displayText: "$150 - $200",
    value: [150, 200],
    key: "cost",
  },
];

export const CUISINE_CHOICE_MAP: IChoices[] = [
  {
    id: "9",
    displayText: "Chinese",
    value: "Chinese",
    key: "cuisines",
  },
  {
    id: "10",
    displayText: "Indian",
    value: "Indian",
    key: "cuisines",
  },
  {
    id: "11",
    displayText: "Japanese",
    value: "Japanese",
    key: "cuisines",
  },
  {
    id: "12",
    displayText: "Italian",
    value: "Italian",
    key: "cuisines",
  },
  {
    id: "13",
    displayText: "French",
    value: "French",
    key: "cuisines",
  },
  {
    id: "14",
    displayText: "Thai",
    value: "Thai",
    key: "cuisines",
  },
];

export const PARENT_FILTERS: IParentFilters[] = [
  {
    id: "15",
    displayText: "Cost 💰",
    key: "cost",
  },
  {
    id: "16",
    displayText: "Dietary 🥦",
    key: "dietary",
  },
  {
    id: "17",
    displayText: "Cuisines 🍜 ",
    key: "cuisines",
  },
];

export const CHOICES_MAPPING = {
  cost: COST_CHOICE_MAP,
  dietary: DIETARY_CHOICE_MAP,
  cuisines: CUISINE_CHOICE_MAP,
};
