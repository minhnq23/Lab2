import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
const ProductItem = (props) => {
  const item = props.item;
  return (
    <FlatList
      data={lists}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
const ProductList = (props) => {
  const lists = props.data || [];
  return (
    <FlatList
      data={lists}
      renderItem={({ item }) => (
        <>
          <Text>Tên món:{item.title}</Text>
          <Text>id: {item.id}</Text>
          <Image
            source={{
              uri: "https://img-cache.coccoc.com/image2?i=2&l=92/30539837",
            }}
            style={styles.img}
          />
        </>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ProductList;
const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
  },
});
