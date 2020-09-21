const button = document.querySelector('button');

button.addEventListener("click", function(event) { //instandly run function on enter
    checkPalindrome();
});

function checkPalindrome(){
    fetch(`/api`) //How?
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('display').innerHTML = data;
      })
}
