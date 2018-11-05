import React, { Fragment } from "react";

import TextAreaContent from "../components/TextAreaContent";
import TextInteractionContent from "../components/TextInteractionContent";
import TextFilteredContent from "../components/TextFilteredContent";

import ContentTexts from "../styles/containers/ContentTexts";

const App = () => {
  return (
    <Fragment>
      <ContentTexts>
        <TextAreaContent />
        <TextInteractionContent />
        <TextFilteredContent />
      </ContentTexts>
    </Fragment>
  );
};

export default App;
