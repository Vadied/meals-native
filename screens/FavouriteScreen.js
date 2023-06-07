import { View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useFavourites } from "../store/context/favourites";

const MealsOverviewScreen = () => {
  const { ids } = useFavourites();
  const meals = MEALS.filter((m) => ids.includes(m.id));

  if (!meals.length)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No meal found</Text>
      </View>
    );

  return <MealList data={meals} title="Favourites" />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
