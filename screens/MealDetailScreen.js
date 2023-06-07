import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { useFavourites } from "../store/context/favourites";

const MealDetailScreen = ({ route, navigation }) => {
  const { ids, removeFavourite, addFavourite } = useFavourites();

  const { mealId } = route.params;
  const meal = MEALS.find((m) => m.id === mealId);

  const isFavourite = ids.includes(mealId);

  const toggleFavourite = () => {
    if (isFavourite) return removeFavourite(mealId);

    return addFavourite(mealId);
  };

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRighe: () => (
          <IconButton
            onPress={toggleFavourite}
            icon={isFavourite ? "star" : "star-otline"}
            color="white"
          />
        ),
      }),
    [navigation, toggleFavourite]
  );

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />

      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails {...meal} textStyle={styles.detailText} />

      <View style={styles.container}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={meal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  container: { alignItems: "center" },
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: { color: "white" },
  listContainer: { width: "80%" },
});
