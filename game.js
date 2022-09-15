// --------------------- PSUEDO CODE ----------------------
//? 1- 100 arasında bit sayı tut

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables:
let score = 10;
// let topScore = 0;

//! Local Storage da topscore adı ile bir değişken ollurur. 
let topScore= localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore

//? check butonuna tıklandığında kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eğer input girilmedi ise ==> kullaıcıya uyarı ver!
  //! eğer rasgele == input.value ise ==>
  //?"tebrikler bildiniz"
  //? bacrground rengi yeşil yap
  //? eğer score > topscore ; topscore = score
  //? secret numberı görünür yap

  if (!guessInput) {
    msg.innerText = "Please Enter a Number";
  } else if (guessInput === randomNumber) {
    msg.innerText = "Congrats! You win 😄";
    body.className = "bg-success";
    document.querySelector(".secret-number").textContent = randomNumber;
    document.querySelector(".check-btn").disabled = true;

    if (score >= topScore) {
      // topScore = score;
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }

    //! eşit değilse ==>
    //? eğer score > 0  score = score - 1
    //? eger rasgele < input.value ==> azalt
    //? eger rasgele > input.value ==> artır
    //? eğer score = 0 üzgünüz kaybettiniz yaz.
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerText = "Decrease 👇")
        : (msg.innerText = "Increase 👆");
    } else {
      msg.innerText = "Sorry, Try Again!";
      body.className = "bg-danger";
      document.querySelector(".secret-number").textContent = randomNumber;
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//? Again e basılsığında oyunu başlangıç değerlerine kur

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").textContent = "Starting...";
});
