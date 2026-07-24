let patients = [
  { id: 1, name: "Ravi Kumar", age: 45, disease: "Diabetes" },
  { id: 2, name: "Meena Iyer", age: 30, disease: "Asthma" },
  { id: 3, name: "Arjun Nair", age: 67, disease: "Hypertension" },
  { id: 4, name: "Divya Rao", age: 22, disease: "Fracture" },
  { id: 5, name: "Sneha Pillai", age: 55, disease: "Migraine" }
];

// Remove the last patient using pop()
let removedPatient = patients.pop();
console.log("Removed patient:", removedPatient.name);
console.log("Array after pop():", patients);

// Sort patients by age (ascending)
patients.sort((a, b) => a.age - b.age);
console.log("Patients sorted by age:", patients);