document.addEventListener("DOMContentLoaded", function() {
    let interface1 = document.getElementById("s-1")
    let interface2 = document.getElementById("s-2")
    

    const plus1 = document.getElementById("h-1");
    const plus2 = document.getElementById("h-2");
    const plus3 = document.getElementById("h-3");
    const ples1 = document.getElementById("g-1");
    const ples2 = document.getElementById("g-2");
    const ples3 = document.getElementById("g-3");

    plus1.addEventListener("click", function() {
        interface1.value = parseInt(interface1.value) + 1;
        });

    plus2.addEventListener("click", function() {
        interface1.value = parseInt(interface1.value) + 2;
        });

    plus3.addEventListener("click", function() {
        interface1.value = parseInt(interface1.value) + 3;
        });

    ples1.addEventListener("click", function() {
        interface2.value = parseInt(interface2.value) + 1;
        });

    ples2.addEventListener("click", function() {
        interface2.value = parseInt(interface2.value) + 2;
        });

    ples3.addEventListener("click", function() {
        interface2.value = parseInt(interface2.value) + 3;
        });

        
    function initializeValues() {
      let valueRetrive1 = localStorage.getItem("inputUser1");
      if (valueRetrive1 === null) {
        localStorage.setItem("inputUser1", JSON.stringify(0));
      }

      let valueRetrive2 = localStorage.getItem("inputUser2");
      if (valueRetrive2 === null) {
        localStorage.setItem("inputUser2", JSON.stringify(0));
      }
    }

    // Call the function after the page loads
    initializeValues();



    interface1.addEventListener("change", function() { 
        let valueRetrive1 = localStorage.getItem("inputUser1");
      if (valueRetrive1 !== null) {
        let retriveValue1 = JSON.parse(valueRetrive1);
        interface1.value = retriveValue1;
      }
    });

    interface2.addEventListener("change", function() {
        let valueRetrive2 = localStorage.getItem("inputUser2");
      if (valueRetrive2 !== null) {
        let retriveValue2 = JSON.parse(valueRetrive2);
        interface2.value = retriveValue2;
      }
    });

});