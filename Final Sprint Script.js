fetch('Final Sprint.json')
  .then(response => response.json())
  .then(data => {
    console.log("JSON data:", data);

    // Step 4: Iterate over records using forEach loop
    data.forEach(record => {
      console.log("One key-value pair:", record.name); // Displaying the 'name' key for each record
    });

    // Step 5: Write results to the browser window as HTML
    displayDataInHTML(data);

    // Additional: Write JSON data to console
    console.log("JSON data:", data);
  })
  .catch(error => console.error("Error fetching data:", error));

// Step 5: Write three functions to return strings of data describing the contents of the JSON file
function getAverageAge(data) {
  let totalAge = 0;
  data.forEach(record => {
    totalAge += record.age;
  });
  const averageAge = totalAge / data.length;
  return `Average Age: ${averageAge.toFixed(2)}`;
}

function getOldestPerson(data) {
  const oldestPerson = data.reduce((oldest, current) => (oldest.age > current.age) ? oldest : current);
  return `Oldest Person: ${oldestPerson.name} (Age: ${oldestPerson.age})`;
}

function getYoungestPerson(data) {
  const youngestPerson = data.reduce((youngest, current) => (youngest.age < current.age) ? youngest : current);
  return `Youngest Person: ${youngestPerson.name} (Age: ${youngestPerson.age})`;
}

// Display results in the browser window as HTML
function displayDataInHTML(data) {
  const outputDiv = document.createElement('div');
  outputDiv.innerHTML = `
    <p>${getAverageAge(data)}</p>
    <p>${getOldestPerson(data)}</p>
    <p>${getYoungestPerson(data)}</p>
  `;
  document.body.appendChild(outputDiv);
}