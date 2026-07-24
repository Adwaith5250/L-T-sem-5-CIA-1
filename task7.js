let patients = [
  { id: 1, name: "Ravi Kumar", age: 45, disease: "Diabetes" },
  { id: 2, name: "Meena Iyer", age: 30, disease: "Asthma" },
  { id: 3, name: "Arjun Nair", age: 67, disease: "Hypertension" },
  { id: 4, name: "Divya Rao", age: 22, disease: "Fracture" }
];

// Using continue: skip patients younger than 30
console.log("Patients aged 30 and above:");
for (let i = 0; i < patients.length; i++) {
  if (patients[i].age < 30) {
    continue;
  }
  console.log(patients[i].name, "-", patients[i].age);
}

// Using break: stop as soon as a senior citizen (age >= 60) is found
console.log("First senior citizen found:");
for (let i = 0; i < patients.length; i++) {
  if (patients[i].age >= 60) {
    console.log(patients[i].name, "-", patients[i].age);
    break;
  }
}