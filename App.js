import { StatusBar } from "react-native";
import ViewImageScreen from "./apps/screens/viewImageScreen";
import Screen from "./apps/screens/screen";
import ListItem from "./components/ListItem";
import CardComponent from "./components/cardComponent";
import ListingDetailScreen from "./apps/screens/ListingDetailScreen";
import MyAccountScreen from "./apps/screens/MyAccountScreen";
import ListingScreen from "./apps/screens/listingScreen";
import Register from "./apps/screens/register";
import Products from "./apps/screens/product";


export default function App() {
  return (
    <Screen>
      <Products/>
    </Screen>
  );
}
