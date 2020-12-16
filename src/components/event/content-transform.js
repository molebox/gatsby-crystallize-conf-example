import React from "react";
import CrystallizeContent from "@crystallize/content-transformer/react";
import { Text } from "@chakra-ui/react";

const ContentTransform = (props) => {
  const overrides = {
    paragraph({ metadata, renderNode, ...rest }) {
      return (
        <Text color="#000" fontSize={props.fontSize} my={2}>
          {renderNode(rest)}
        </Text>
      );
    },
  };

  return <CrystallizeContent {...props} overrides={overrides} />;
};

export default ContentTransform;
