let arr=[];
document.getElementById("send").addEventListener("click",function(){
    let name=document.getElementById("nameproduct");
    let pra=document.getElementById("number");
    let image=document.getElementById("image");
    let sele=document.getElementById("selector");
    if(name.value ==""||pra.value ==""||image.value ==""||sele.value ==""){
        alert("you have an empty input")
    }
    else if(pra.value<0){
        alert("false number")
    }
    else{
    let obj={name:name.value , price:pra.value, image:image.value,catalog:sele.value};
    arr.push(obj);
    localStorage.setItem("prod",JSON.stringify(arr));
    addtotable(name.value,pra.value,image.value,sele.value);
    name.value="";
    pra.value="";
    image.value="";
    sele.value="";}

})
function addtotable(name1,pra1,image1,sele1){
    let tablebody=document.getElementById("tabledata");
    let label1=document.createElement("label");
    let label2=document.createElement("label");
    let label3=document.createElement("img");
    let label4=document.createElement("label");
    //-----
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    //------
    let tr=document.createElement("tr");
    //---
    label1.textContent=name1;
    label2.textContent=pra1;
    label3.src=image1;
    label4.textContent=sele1;
    //----
    td1.appendChild(label1);
    td2.appendChild(label2);
    td3.appendChild(label3);
    td4.appendChild(label4);
    //-----
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    //------
    tablebody.appendChild(tr);

}
//------

function datafromlocal(){
    if(localStorage.getItem("prod")){
        arr=JSON.parse(localStorage.getItem("prod"));
        for(let i=0 ; i<arr.length;i++){
            addtotable(arr[i].name,arr[i].price,arr[i].image,arr[i].catalog) ;
        }
    }
    else{
        alert("no data");
    }

}
datafromlocal()