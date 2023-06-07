import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ data, title }) => {
  const renderMealItem = ({ item }) => <MealItem {...item} />;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
        numColumns={2}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
