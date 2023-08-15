import { ItemType } from "types/types";

export const getRandomItems = (): Array<ItemType> => {
  const minItems = 5;
  const maxItems = 15;
  const items = [];

  const randomItemsAmount = getRandomInt(minItems, maxItems);

  for (let i = 0; i < randomItemsAmount; i++) {
    const randomIdx = getRandomInt(0, shoppingItems.length - 1);
    const name = shoppingItems[randomIdx];
    const amount = getRandomInt(1, 20);

    const item = {
      name,
      amount,
      id: i,
    };

    items.push(item);
  }

  return items;
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shoppingItems = [
  "Apples",
  "Bananas",
  "Oranges",
  "Milk",
  "Eggs",
  "Bread",
  "Chicken",
  "Beef",
  "Pasta",
  "Rice",
  "Cereal",
  "Cheese",
  "Yogurt",
  "Tomatoes",
  "Potatoes",
  "Onions",
  "Carrots",
  "Broccoli",
  "Spinach",
  "Lettuce",
  "Cucumbers",
  "Bell Peppers",
  "Strawberries",
  "Blueberries",
  "Grapes",
  "Watermelon",
  "Cantaloupe",
  "Pineapple",
  "Ice Cream",
  "Chocolate",
];
