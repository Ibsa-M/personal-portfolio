function register() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;

  let gender = document.querySelector('input[name="gender"]:checked');
  let dept = document.getElementById("dept").value;

  let hobbies = [];
  document.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(cb => hobbies.push(cb.value));

  let others = document.getElementById("others").value;

  // Validation
  if (fname === "" || lname === "") {
    alert("Please enter your name!");
    return;
  }

  if (!gender) {
    alert("Please select gender!");
    return;
  }

  // Output
  alert(
    "Registered Successfully!\n\n" +
    "Name: " + fname + " " + lname +
    "\nGender: " + gender.value +
    "\nDepartment: " + dept +
    "\nHobbies: " + hobbies.join(", ") +
    "\nOthers: " + others
  );
}