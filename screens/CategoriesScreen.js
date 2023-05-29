import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem =
  (navigation) =>
  ({ item }) => {
    const handlePress = () =>
      navigation.navigate("MealsOverview", { categoryId: item.id });
    return <CategoryGridTile {...item} onPress={handlePress} />;
  };

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={({ id }) => id}
        renderItem={renderCategoryItem(navigation)}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
