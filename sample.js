const root=document.getElementById("root")
const input=document.getElementById("inputtext")
function show(){
    const inputvalue=input.value;
    const p=document.createElement("p")
    p.innerText=inputvalue
    root.appendChild(p)
}