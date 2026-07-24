let patients = [
  { id: 1, name: "Ravi Kumar", age: 45, disease: "Diabetes" },
  { id: 2, name: "Meena Iyer", age: 30, disease: "Asthma" },
  { id: 3, name: "Arjun Nair", age: 67, disease: "Hypertension" },
  { id: 4, name: "Divya Rao", age: 22, disease: "Fracture" }
];

// Add a new patient
patients.push({ id: 5, name: "Sneha Pillai", age: 55, disease: "Migraine" });
console.log("After adding new patient:", patients);

// Find the patient with the highest age
let oldestPatient = patients[0];
for (let i = 1; i < patients.length; i++) {
  if (patients[i].age > oldestPatient.age) {
    oldestPatient = patients[i];
  }
}
console.log("Oldest patient:", oldestPatient.name, "-", oldestPatient.age);