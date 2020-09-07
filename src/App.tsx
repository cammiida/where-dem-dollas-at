import React from "react";
import { Provider, defaultTheme, Grid, View } from "@adobe/react-spectrum";

import MyComponent from "./components/MyComponent/MyComponent";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={["sidebar content", "sidebar content", "sidebar footer"]}
        columns={["1fr", "4fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        minHeight="100vh"
        gap="size-100"
      >
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View backgroundColor="purple-600" gridArea="content">
          <MyComponent></MyComponent>
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
    </Provider>
  );
}

export default App;
