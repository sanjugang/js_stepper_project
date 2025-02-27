//main heading
let header=document.createElement("h1");
header.innerText="Stepper";
header.style.textAlign="center";
header.style.paddingBottom="1rem"
header.style.borderBottom="4px solid #f5f5f5"


document.body.appendChild(header);


const container1=document.createElement("div");
document.body.appendChild(container1);
// container1.style.border='2px solid';
container1.style.display='flex';
container1.style.flexDirection='column';

//stepper

let container=document.createElement("div");
container.className="container";

container1.appendChild(container);
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center"

//elements




let div1=document.createElement("div");
div1.innerText="1";
div1.style.backgroundColor="blue";
let div2=document.createElement("div");
let div3=document.createElement("div");
div3.innerText="2";
let div4=document.createElement("div");
let div5=document.createElement("div");
div5.innerText="3";
let div6=document.createElement("div");
let div7=document.createElement("div");
div7.innerText="4";

div1.className="div1 circle";
div2.className="div2 line";
div3.className="div3 circle";
div4.className="div4 line";
div5.className="div5 circle";
div6.className="div6 line";
div7.className="div7 circle";

container.append(div1,div2,div3,div4,div5,div6,div7);

//circle 
let circle_elements=document.querySelectorAll(".circle");
circle_elements.forEach((e)=>{
    e.style.height="40px";
    e.style.width="40px";
    e.style.border="2px solid black";
    e.style.borderRadius="50%";
    e.style.display="flex";
    e.style.justifyContent="center";
    e.style.alignItems="center";
})

//lines
let line_elements=document.querySelectorAll(".line");
line_elements.forEach((e)=>{
    e.style.width="22%";
    e.style.height="2px";
    e.style.border="2px solid black";
    
})


//tracking
const container2=document.createElement("div");
container1.appendChild(container2);
container2.style.display="flex";
container2.style.justifyContent="space-around";

const p1=document.createElement("p");
p1.innerText="Contact Details";
p1.style.display="position";
const p2=document.createElement("p");
p2.innerText="Shipping Address";
const p3=document.createElement("p");
p3.innerText="Payment";
const p4=document.createElement("p");
p4.innerText="Delivered";

container2.append(p1,p2,p3,p4);




//text message
const container3=document.createElement('div');
container1.appendChild(container3);
container3.style.display="flex";
container3.style.justifyContent="center";
container3.style.fontWeight="bold";

const t1=document.createElement("p");
t1.innerText="Add contact details for further communications";
t1.style.fontSize="20px"
const t2=document.createElement("p");
t2.innerText="Add shipping address for successful delivery";
t2.style.fontSize="20px"
const t3=document.createElement("p");
t3.innerText="Complete payment to complete the order";
t3.style.fontSize="20px"
const t4=document.createElement("p");
t4.innerText="Ready to get delivered";
t4.style.fontSize="20px"
const t5=document.createElement("p");
t5.innerText="Order deliverd successfully!🎉";
t5.style.fontSize="20px"


const container4=document.createElement("div");
document.body.appendChild(container4);
container4.style.display="flex";
container4.style.justifyContent="center";
container4.style.gap="20%"

//button1
const button1=document.createElement("button");
button1.innerText="Previous";
button1.style.height="40px";
button1.style.width="90px";

//button2
const button2=document.createElement("button");
button2.innerText="Next";
button2.style.height="40px";
button2.style.width="80px";

container4.append(button1,button2);

let count=1;
button1.disabled=true;
container3.append(t1);
button2.addEventListener('click',()=>{
    count=count+2;
    if(count>9){
        count=9;
    }
    changeColor(count);
})
function changeColor(count){
    let divs=container.querySelectorAll("div");
    for(let i=0;i<divs.length;i++){
        if(i<count){
            divs[i].style.backgroundColor="green";
            // divs[i].append(img1);
        }
        else{
            divs[i].style.backgroundColor="white";
        }
    }

    if(count===1){
        container3.innerText="";
        container3.append(t1);
        button1.disabled=true;
    
    }else if(count===3){
        container3.innerText="";
        container3.append(t2);
        button1.disabled=false;
    }else if(count===5){
        container3.innerText="";
        container3.append(t3);
    }else if(count===7){
        button2.disabled=false;
        container3.innerText="";
        container3.append(t4);
    }else{
        button2.disabled=true;
        container3.innerText="";
        container3.append(t5);
    }if(count<=7){
    divs[count-1].style.backgroundColor="blue";
    }
}
button1.addEventListener('click',()=>{
    count=count-2;
    if(count<1){
        count=1;
    }
    changeColor(count);
})

