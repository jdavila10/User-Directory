import React from 'react';
import getEmployees from "./utils/API.js"
import DataTb from "./components/DataTb";
import Search from "./components/Search";
import JumboHeader from "./components/JumboHeader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchTerm: "",
      sorted: false
    };
    this.sortHandler = this.sortHandler.bind(this)
  };
    
    componentDidMount() {
    getEmployees
      .then((res) => {
        this.setState({ employees: res.data.results });
      });
  };

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  sortHandler(item) {
    let sortedNames;
    if (!this.state.sorted) {
      sortedNames = this.state.employees.sort((a, b) => { return b.name[item].localeCompare(a.name[item]) });
      this.setState({ employees: sortedNames, sorted: true });
    }
    else {
      sortedNames = this.state.employees.sort((a, b) => { return a.name[item].localeCompare(b.name[item]) });
      this.setState({ employees: sortedNames, sorted: false });
    }
  };

  render() {
    return (
      <div>
        <JumboHeader />
        <div className="container-fluid" id="contain">
        <Search
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <DataTb
          employees={this.state.employees}
          sortHandler={this.sortHandler}
          searchTerm={this.state.searchTerm}
        />
        </div>
      </div>
    )
  }
};

export default App;