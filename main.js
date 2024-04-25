document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".input1");
  const ageInput = document.querySelector(".input2");
  const marriedInput = document.querySelector(".input3");
  const outputDiv = document.querySelector(".output2");
  const submitBtn = document.querySelector(".btn1");
  const cancelBtn = document.querySelector(".btn2");

  const displayInput1 = () => {
    const name = nameInput.value;

    document.getElementById("name").textContent = "Name: " + name;
  };

  const displayInput2 = () => {
    const age = ageInput.value;

    document.getElementById("age").textContent = "Age: " + age;
  };

  const displayInput3 = () => {
    const isMarried = marriedInput.value;

    document.getElementById("married").textContent = "Is Married: " + isMarried;
  };

  nameInput.addEventListener("keyup", displayInput1);
  ageInput.addEventListener("keyup", displayInput2);
  marriedInput.addEventListener("keyup", displayInput3);

  const displaySubmission = () => {
    const submissionText = document.createElement("p");
    submissionText.textContent = "Yuborildi";
    outputDiv.appendChild(submissionText);
  };

  submitBtn.addEventListener("click", function () {
    displayInput1();
    displayInput2();
    displayInput3();
    displaySubmission();
  });

  cancelBtn.addEventListener("click", function () {
    nameInput.value = "";
    ageInput.value = "";
    marriedInput.value = "";
    outputDiv.innerHTML = "";
  });
});
