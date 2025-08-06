import { ref, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

document.getElementById("voterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const voterId = document.getElementById("voterId").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  writeVoterData(voterId, name, age);

  alert("Voter data submitted successfully!");
  document.getElementById("voterForm").reset();
});

function writeVoterData(voterId, name, age) {
  const db = window.database;
  set(ref(db, 'voters/' + voterId), {
    name: name,
    age: parseInt(age)
  });
}
