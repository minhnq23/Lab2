import { Text, StyleSheet } from "react-native";

export default function ProductName(props) {
  return (
    <>
      <Text style={styles.text}>{props.name}</Text>
      <ProductDesc
        desc={props.description ? props.description : "Updated description"}
      />
    </>
  );
}

export function ProductDesc(props) {
  return <Text style={styles.text}>{props.desc}</Text>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
    color: "blue",
  },
});
