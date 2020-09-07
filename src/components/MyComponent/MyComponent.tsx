import React from "react";
import { View } from "@adobe/react-spectrum";

export interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return <View>My Component</View>;
};

export default MyComponent;
