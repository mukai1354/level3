// 各HTML要素を定数に代入
const ham = document.querySelector("#ham");
const ham_line = document.querySelectorAll(".ham_line");
const mask = document.querySelector("#mask");
const gnav = document.querySelector("#gnav");

// 各HTML要素のクラスを付け外し
const toggleClass = () => {
    // ham_lineは複数存在するため、1つずつ実行
    ham_line.forEach((line) => line.classList.toggle("ham_line_clicked"));
    mask.classList.toggle("open");
    gnav.classList.toggle("open");
};

// ハンバーガーメニューまたはマスククリック時に上記関数を呼び出す
ham.addEventListener("click", toggleClass);
mask.addEventListener("click", toggleClass);
