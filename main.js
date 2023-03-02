const regForm = document.querySelector("#regForm");
let firstName;
let firstPassword;
let secondPassword;
let invalidPasswords = document.querySelectorAll(".invalidPassword");
let seeYouLater = document.querySelectorAll(".seeYouLater");
let driveSafe = document.querySelector("#driveSafe");

const continueOrNot = (allGood) => {
  if (allGood) {
    firstPassword.classList.remove("invalid");
    secondPassword.classList.remove("invalid");
    [...invalidPasswords].forEach((IP) => {
      IP.classList.add("opacity-0");
    });

    firstName = document.querySelector("#first-name");

    driveSafe.textContent = `You just joined our car rental company Odin. Drive safe ${firstName.value} - our BMW M3 2022 is REALLY fast.`;

    [...seeYouLater].forEach((SYL) => {
      SYL.style["opacity"] = 0;
      setTimeout(() => {
        SYL.remove();
      }, 1000);
    });

    setTimeout(() => {
      driveSafe.classList.remove("hidden");
      setTimeout(() => {
        driveSafe.classList.remove("opacity-0");
      }, 10);
    }, 1000);
  } else {
    firstPassword.classList.add("invalid");
    secondPassword.classList.add("invalid");
    [...invalidPasswords].forEach((IP) => {
      IP.classList.remove("opacity-0");
    });
    // alert("Your passwords don't match.");
  }
};

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  firstPassword = document.querySelector("#pass-1");
  secondPassword = document.querySelector("#pass-2");

  let allGood = firstPassword.value == secondPassword.value ? true : false;

  continueOrNot(allGood);
});
