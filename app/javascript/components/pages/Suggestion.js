import React from "react"

import Heroes from "../Heroes"
import SuggestionResults from "../SuggestionResults"

class Suggestion extends React.Component {

  render () {
    return (
      <div className="suggestion container">
        <Heroes />
        <SuggestionResults />
      </div>
    );
  }
}

export default Suggestion
