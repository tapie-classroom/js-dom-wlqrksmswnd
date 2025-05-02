let btn = document.getElementById("generate-button")
        btn.addEventListener("click", function(){
           const random = Math.floor(Math.random() *  2147483647) + 1;
           console.log(random)
        const put = document.getElementById("num")
        put.innerText = random
        })