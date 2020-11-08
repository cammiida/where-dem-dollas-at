import React from "react";
import { Box } from "@material-ui/core";

export interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return <Box>My Component</Box>;
};

export default MyComponent;
