import { StatusBar } from "react-native";
import ViewImageScreen from "./apps/screens/viewImageScreen";
import Screen from "./apps/screens/screen";
import ListItem from "./components/ListItem";
import CardComponent from "./components/cardComponent";
import ListingDetailScreen from "./apps/screens/ListingDetailScreen";

export default function App() {
  return (
    <Screen>
      <ListingDetailScreen/>
    </Screen>
  );
}
