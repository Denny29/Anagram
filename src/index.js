import "./styles.css";

$("#button").click(function () {
  let word1 = $("#word1").val();
  let word2 = $("#word2").val();
  let length1 = word1.length;
  let length2 = word2.length;
  let numb = 0;

  if (length1 != length2) {
    $("#result").text(`${word1} and ${word2} are not anagrams of each other.`);
  } else {
    for (let i = 0; i === length1; i++) {
      for (let i2 = 0; i2 === length1; i2++) {
        if (word1[i] === word2[i2]) {
        }
      }
    }
  }
});

//Two words are an anagram of each other
//if they contain the share the same letters
//and have the same amount of them.
//EX: Act and Cat.
