import React from "react";
import { formatMessage, injectIntl } from "react-intl";

class Home extends React.Component {
  render() {
    return <div className="pages home" />;
  }
}

export default injectIntl(Home);
