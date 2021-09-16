const btn = document.querySelector(".btn")
const box = document.querySelector(".box")

btn.addEventListener("click", function() {
    box.style.backgroundColor = 'red'
    setTimeout(function() {
        alert('이벤트가 실행되었습니다.');
    })
    box.innerText = "box";
});