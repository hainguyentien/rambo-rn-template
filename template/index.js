/**
 * @format
 */

import { AppRegistry } from "react-native";
import { enableFreeze } from "react-native-screens";
import { name as appName } from "./app.json";
import AppProvider from "./src/app/AppProvider";

enableFreeze(true);

AppRegistry.registerComponent(appName, () => AppProvider);
