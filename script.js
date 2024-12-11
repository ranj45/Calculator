



let addnum = (number)=>{
    // console.log(number)
    
    let ip=document.querySelector("input")

    ip.value += number

}

let clear1=()=>{
    let ip=document.querySelector("input")
    ip.value=""
}

let calculate=()=>{
    let ip_value=document.querySelector("input").value
    let result=eval(ip_value)

    document.querySelector("input").value=result

}

let back=()=>{
let exp=document.querySelector("input").value
let res=exp.slice(0,-1)
document.querySelector("input").value=res

}