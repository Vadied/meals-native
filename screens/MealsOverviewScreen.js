import { FlatList, StyleSheet, View } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const meals = MEALS.filter((m) => m.categoryIds.includes(categoryId));
  const renderMealItem = ({ item }) => (
    <CategoryGridTile title={item.title} imageUrl={item.imageUrl} />
  );
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
      <FlatList
        data={meals}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
        numColumns={2}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
