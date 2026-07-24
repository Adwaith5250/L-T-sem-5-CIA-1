let patients = [
  { id: 1, name: "Ravi Kumar", age: 45, disease: "Diabetes" },
  { id: 2, name: "Meena Iyer", age: 30, disease: "Asthma" },
  { id: 3, name: "Arjun Nair", age: 67, disease: "Hypertension" },
  { id: 4, name: "Divya Rao", age: 22, disease: "Fracture" }
];

for (let i = 0; i < patients.length; i++) {
  console.log(
    `ID: ${patients[i].id}, Name: ${patients[i].name}, Age: ${patients[i].age}, Disease: ${patients[i].disease}`
  );
}