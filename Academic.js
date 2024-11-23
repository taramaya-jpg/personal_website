// Toggle menu for mobile
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

const academicData = {
  class10: {
    index: "010190460150",
    marks: {
      English: 65,
      Dzongkha: 74,
      History: 71,
      Math: 72,
      Science: 60,
      Economic: 81,
    },
  },
  class12: {
    index: "012220220247",
    marks: {
      English: 63,
      Dzongkha: 76,
      Economic: 85,
      Commerce: 81,
      Accountancy: 67,
    },
  },
  college: {
    index: "07230078",
    semester1: {
      BML101: 69.9,
      CSP101: 66,
      DAT101: 72,
      EPS101: 70,
    },
    semester2: {
      MAC101: 78.2,
      LAC101: 72.0,
      DAT102: 81,
      LAC102: 78,
      BML101: 76,
    },
  },
};

document.getElementById("submitIndex").addEventListener("click", () => {
  const indexInput = document.getElementById("indexInput").value.trim();
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  let found = false;

  if (academicData.class10.index === indexInput) {
    found = true;
    createTable("Class 10 Marks", academicData.class10.marks);
  } else if (academicData.class12.index === indexInput) {
    found = true;
    createTable("Class 12 Marks", academicData.class12.marks);
  } else if (academicData.college.index === indexInput) {
    found = true;
    createTable("1st Semester Marks", academicData.college.semester1);
    createTable("2nd Semester Marks", academicData.college.semester2);
  }

  if (!found) {
    resultsSection.innerHTML = "<p>No data found for the entered index.</p>";
  }
});

// Function to create a table
function createTable(title, marks) {
  const resultsSection = document.getElementById("results");

  const tableContainer = document.createElement("div");
  tableContainer.className = "table-container";

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  tableContainer.appendChild(titleElement);

  const table = document.createElement("table");
  table.className = "marks-table";

  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.innerHTML = "<th>Subject</th><th>Marks</th>";
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement("tbody");
  for (const [subject, score] of Object.entries(marks)) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${subject}</td><td>${score}</td>`;
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);

  tableContainer.appendChild(table);
  resultsSection.appendChild(tableContainer);
}
