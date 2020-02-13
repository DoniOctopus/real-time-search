import React from 'react';
import './App.css';

const jsFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Backbone.js",
  "Vue",
  "Meteor",
  "Node.js",
  "Polymer"
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = jsFrameworks.filter(jsFrameworksSearch =>
      jsFrameworksSearch.toLowerCase().includes(searchTerm.trim()));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
    <div class="title">Real-time Search</div>
    <div class="frame">
    <input
    type="text"
    placeholder="Type here..."
    value={searchTerm}
    onChange={handleChange}
    />
    <ul>
    {searchResults.map(item => (
      <li>{item}</li>
    ))}
    </ul>
    </div>
    </div>
  );
}

export default App;
