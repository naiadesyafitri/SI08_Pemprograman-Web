document.querySelectorAll("a").forEach((a)=>{
    //Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan dengan array
    let choices = ["Rock", "Paper", "Scissors"];
    
    // pilihan computer secara random 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 100);

    }
    
    // Jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("KOMPUTER WIN");

    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("KOMPUTER WINN");

    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("KOMPUTER WINN");

    }

    // Jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN");

    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WINN");

    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WINN");

    }
}