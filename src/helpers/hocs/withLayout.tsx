import React, { ComponentType, FC } from "react";
import GenericLayout from "../../components/templates/GenericLayout";

const withLayout = <P extends {}>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  return (props) => (
    <GenericLayout>
      <WrappedComponent {...props} />
    </GenericLayout>
  );
};

export default withLayout;
