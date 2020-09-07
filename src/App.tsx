import React from "react";
import {
  Provider,
  defaultTheme,
  Grid,
  View,
  Content,
  Menu,
  Item,
  Text,
  Heading,
  Flex,
  Divider,
} from "@adobe/react-spectrum";
import Money from "@spectrum-icons/workflow/Money";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyComponent from "./components/MyComponent/MyComponent";

function App() {
  const routes = (
    <Switch>
      <Route path="/accounts">Accounts</Route>
      <Route exact path="/">
        <MyComponent />
      </Route>
      <Route>
        <Content>404</Content>
      </Route>
    </Switch>
  );

  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Router>
        <Grid
          areas={["sidebar content", "sidebar content", "sidebar footer"]}
          columns={["1fr", "4fr"]}
          rows={["size-1000", "auto", "size-1000"]}
          minHeight="100vh"
          gap="size-100"
        >
          <View gridArea="sidebar">
            <Flex marginX="size-200" gap="size-100" alignItems="center">
              <Money size="XL" />
              <h1>WDDA?</h1>
            </Flex>
            <Divider />
            <Menu onAction={(key) => alert(key)}>
              <Item key="dashboard">
                <Text>Dashboard</Text>
              </Item>
              <Item key="accounts">
                <Text>Accounts</Text>
              </Item>
            </Menu>
          </View>
          <View backgroundColor="purple-600" gridArea="content">
            {routes}
          </View>
          <View backgroundColor="magenta-600" gridArea="footer" />
        </Grid>
      </Router>
    </Provider>
  );
}

export default App;
