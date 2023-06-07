import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import MealList from "../components/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const meals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((c) => c.id === categoryId)?.name || "Meals",
    });
  }, [categoryId, navigation]);

  return <MealList data={meals} title="Meals Overview Screen" />;
};

export default MealsOverviewScreen;
