import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) => {
  const navigation = useNavigation();

  const handlePress = () =>
    navigation.navigate("MealDetail", {
      mealId: id,
    });

  return (
    <View style={[styles.item]}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            complexity={complexity}
            affordability={affordability}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  item: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    backgroundColor: "white",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: { width: "100%", height: 200 },
  buttonPressed: { opacity: 0.5 },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
});
