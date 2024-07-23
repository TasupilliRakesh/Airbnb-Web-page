let a21=document.getElementById("a21")
console.log(a21);

a21.onclick= ()=>{
    let m=document.getElementById("m")
    console.log(m);
    res=m.classList.toggle("true")
    if(res){
        m.style.display="block"
    }else{
        m.style.display="none"
    }
}

let m1=document.getElementById("m1")
console.log(m1);

m1.onclick=()=>{
    let n=document.getElementById("n")
    console.log(n);
    res1=n.classList.toggle("true")
    // console.log(document.classLit.toggle);
    if(res1){
        n.style.display="block"
    }
    else{
        n.style.display="none"
    }

}

let n1=document.getElementById("n11")
console.log(n1);

n1.onclick=()=>{
    let n11=document.getElementById("n11")
    console.log(n11);
    res2=n11.classList.toggle("true")
    if(res2){
        n11.style.display="block"
    }
    else{
        n.style.display="none"
    }
}

// let m1=document.getElementById("m1")
// console.log(m1);

// m11.onclick=()=>{
//     let n1=document.getElementById("n1")
// }

// let a22=document.querySelector("a21")
// console.log(a22);

// n.onclick=()=>{
//     let n11=document.getElementById("body")
//     console.log(n);
//     res1=n11.classList.toggle("true")
//     console.log(document.classLit.toggle);
//     if(res1){
//         n11.style.display="block"
//     }
// else{
//         n11.style.display="none"
//     }

// }