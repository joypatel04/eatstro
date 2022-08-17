export type IAdditionalFilter = {
  dietaryChoice: string | null;
  cuisineType: string | null;
  costRange: [number, number] | null;
};

export type IChoices = {
  id: string;
  displayText: string;
  value: string;
  key: string;
};

export type ICost = {
  id: string;
  displayText: string;
  value: [number, number];
  key: string;
};

export type IActiveFilter = "cost" | "dietary" | "cuisines";

export type IFilters = {
  cost?: ICost | undefined;
  dietary?: IChoices | undefined;
  cuisines?: IChoices | undefined;
};

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
    id: "1",
    displayText: "$0 - $50",
    value: [0, 50],
    key: "cost",
  },
  {
    id: "2",
    displayText: "$50 - $100",
    value: [50, 100],
    key: "cost",
  },
  {
    id: "3",
    displayText: "$100 - $150",
    value: [100, 150],
    key: "cost",
  },
  {
    id: "4",
    displayText: "$150 - $200",
    value: [150, 200],
    key: "cost",
  },
];

export const CUISINE_CHOICE_MAP: IChoices[] = [
  {
    id: "1",
    displayText: "Chinese",
    value: "Chinese",
    key: "cuisine",
  },
  {
    id: "2",
    displayText: "Indian",
    value: "Indian",
    key: "cuisine",
  },
  {
    id: "3",
    displayText: "Japanese",
    value: "Japanese",
    key: "cuisine",
  },
  {
    id: "4",
    displayText: "Italian",
    value: "Italian",
    key: "cuisine",
  },
  {
    id: "5",
    displayText: "French",
    value: "French",
    key: "cuisine",
  },
  {
    id: "6",
    displayText: "Thai",
    value: "Thai",
    key: "cuisine",
  },
];

interface IParentFilters {
  id: string;
  displayText: string;
  key: "cost" | "dietary" | "cuisines";
}

export const PARENT_FILTERS: IParentFilters[] = [
  {
    id: "1",
    displayText: "Cost 💰",
    key: "cost",
  },
  {
    id: "2",
    displayText: "Dietary 🥦",
    key: "dietary",
  },
  {
    id: "3",
    displayText: "Cuisines 🍜 ",
    key: "cuisines",
  },
];

export const CHOICES_MAPPING = {
  cost: COST_CHOICE_MAP,
  dietary: DIETARY_CHOICE_MAP,
  cuisines: CUISINE_CHOICE_MAP,
};
