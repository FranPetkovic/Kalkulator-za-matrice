let prva1= document.getElementById("11")
let prva2= document.getElementById("12")
let prva3= document.getElementById("13")
let prva4= document.getElementById("14")
let prva5= document.getElementById("15")
let prva6= document.getElementById("16")
let prva7= document.getElementById("17")
let prva8= document.getElementById("18")
let prva9= document.getElementById("19")


let druga1= document.getElementById("21")
let druga2= document.getElementById("22")
let druga3= document.getElementById("23")
let druga4= document.getElementById("24")
let druga5= document.getElementById("25")
let druga6= document.getElementById("26")
let druga7= document.getElementById("27")
let druga8= document.getElementById("28")
let druga9= document.getElementById("29")

let treca1= document.getElementById("31")
let treca2= document.getElementById("32")
let treca3= document.getElementById("33")
let treca4= document.getElementById("34")
let treca5= document.getElementById("35")
let treca6= document.getElementById("36")
let treca7= document.getElementById("37")
let treca8= document.getElementById("38")
let treca9= document.getElementById("39")

let gumbZbroj=document.getElementById("gumbZbroji")
let gumbPomnozi=document.getElementById("gumbPomnozi")
let gumbDet1=document.getElementById("gumbDet1")
let inverzA=document.getElementById("gumbInverz1")

let gumbDet2=document.getElementById("gumbDet2")
let inverzB=document.getElementById("gumbInverz2")

prva1.value=0
prva2.value=0
prva3.value=0
prva4.value=0
prva5.value=0
prva6.value=0
prva7.value=0
prva8.value=0
prva9.value=0

druga1.value=0
druga2.value=0
druga3.value=0
druga4.value=0
druga5.value=0
druga6.value=0
druga7.value=0
druga8.value=0
druga9.value=0

gumbZbroj.addEventListener('click',()=>{
   treca1.innerText=parseInt(prva1.value) + parseInt(druga1.value)
   treca2.innerText=parseInt(prva2.value) + parseInt(druga2.value)
   treca3.innerText=parseInt(prva3.value) + parseInt(druga3.value)
   treca4.innerText=parseInt(prva4.value) + parseInt(druga4.value)
   treca5.innerText=parseInt(prva5.value) + parseInt(druga5.value)
   treca6.innerText=parseInt(prva6.value) + parseInt(druga6.value)
   treca7.innerText=parseInt(prva7.value) + parseInt(druga7.value)
   treca8.innerText=parseInt(prva8.value) + parseInt(druga8.value)
   treca9.innerText=parseInt(prva9.value) + parseInt(druga9.value)
})

gumbPomnozi.addEventListener('click',()=>{
   treca1.innerText=(parseInt(prva1.value) * parseInt(druga1.value) + (parseInt(prva2.value) * parseInt(druga4.value) ) + (parseInt(prva3.value) * parseInt(druga7.value)  ) )
   treca2.innerText=(parseInt(prva1.value) * parseInt(druga2.value) + (parseInt(prva2.value) * parseInt(druga5.value) ) + (parseInt(prva3.value) * parseInt(druga8.value)  ) )
   treca3.innerText=(parseInt(prva1.value) * parseInt(druga3.value) + (parseInt(prva2.value) * parseInt(druga6.value) ) + (parseInt(prva3.value) * parseInt(druga9.value)  ) )
 
   treca4.innerText=(parseInt(prva4.value) * parseInt(druga1.value) + (parseInt(prva5.value) * parseInt(druga4.value) ) + (parseInt(prva6.value) * parseInt(druga7.value)  ) )
   treca5.innerText=(parseInt(prva4.value) * parseInt(druga2.value) + (parseInt(prva5.value) * parseInt(druga5.value) ) + (parseInt(prva6.value) * parseInt(druga8.value)  ) )
   treca6.innerText=(parseInt(prva4.value) * parseInt(druga3.value) + (parseInt(prva5.value) * parseInt(druga6.value) ) + (parseInt(prva6.value) * parseInt(druga9.value)  ) )
 
   treca7.innerText=(parseInt(prva7.value) * parseInt(druga1.value) + (parseInt(prva1.value) * parseInt(druga8.value) ) + (parseInt(prva9.value) * parseInt(druga7.value)  ) )
   treca8.innerText=(parseInt(prva7.value) * parseInt(druga2.value) + (parseInt(prva1.value) * parseInt(druga8.value) ) + (parseInt(prva9.value) * parseInt(druga8.value)  ) )
   treca9.innerText=(parseInt(prva7.value) * parseInt(druga3.value) + (parseInt(prva1.value) * parseInt(druga8.value) ) + (parseInt(prva9.value) * parseInt(druga9.value)  ) )
 
})

function de3x3A(){
    let x = (parseInt(prva5.value)*parseInt(prva9.value))-(parseInt(prva8.value)*parseInt(prva6.value))
    let y = (parseInt(prva4.value)*parseInt(prva9.value))-(parseInt(prva7.value)*parseInt(prva6.value))
    let z = (parseInt(prva4.value)*parseInt(prva8.value))-(parseInt(prva7.value)*parseInt(prva5.value))
    let det= (parseInt(prva1.value)*x)-(parseInt(prva2.value)*y)+(parseInt(prva3.value)*z)
    return det
}

function de3x3B(){
    let x = (parseInt(druga5.value)*parseInt(druga9.value))-(parseInt(druga8.value)*parseInt(druga6.value))
    let y = (parseInt(druga4.value)*parseInt(druga9.value))-(parseInt(druga7.value)*parseInt(druga6.value))
    let z = (parseInt(druga4.value)*parseInt(druga8.value))-(parseInt(druga7.value)*parseInt(druga5.value))
    let det2= (parseInt(druga1.value)*x)-(parseInt(druga2.value)*y)+(parseInt(druga3.value)*z)
    return det2
}
function postisti(){
    treca1.innerText=""
    treca2.innerText=""
    treca3.innerText=""
    treca4.innerText=""
    treca5.innerText=""
    treca6.innerText=""
    treca7.innerText=""
    treca8.innerText=""
    treca9.innerText=""
}

gumbDet1.addEventListener("click",()=>{
    postisti()
    let deter=de3x3A()
    console.log(deter)
    treca5.innerText=deter
})
gumbDet2.addEventListener("click",()=>{
    postisti()
    let deter=de3x3B()
    console.log(deter)
    treca5.innerText=deter
})


function de(m)
    {
        let m16 = m[0] * m[3];
        let m18 = m[1] * m[2];
        return m16 - m18;
    }

    let m1=new Array(4);
    let m2=new Array(4);
    let m3=new Array(4);
    let m4=new Array(4);
    let m5=new Array(4);
    let m6=new Array(4);
    let m7=new Array(4);
    let m8=new Array(4);
    let m9=new Array(4);

    inverzA.addEventListener("click",()=>{

        m1[0]=parseInt(prva5.value);
        m1[1]=parseInt(prva6.value);
        m1[2]=parseInt(prva8.value);
        m1[3]=parseInt(prva9.value);
    
        m2[0]=parseInt(prva4.value);
        m2[1]=parseInt(prva6.value);
        m2[2]=parseInt(prva7.value);
        m2[3]=parseInt(prva9.value);

        m3[0]=parseInt(prva4.value);
        m3[1]=parseInt(prva5.value);
        m3[2]=parseInt(prva7.value);
        m3[3]=parseInt(prva8.value);

        m4[0]=parseInt(prva2.value);
        m4[1]=parseInt(prva3.value);
        m4[2]=parseInt(prva8.value);
        m4[3]=parseInt(prva9.value);

        m5[0]=parseInt(prva1.value);
        m5[1]=parseInt(prva3.value);
        m5[2]=parseInt(prva7.value);
        m5[3]=parseInt(prva9.value);

        m6[0]=parseInt(prva1.value);
        m6[1]=parseInt(prva2.value);
        m6[2]=parseInt(prva7.value);
        m6[3]=parseInt(prva8.value);

        m7[0]=parseInt(prva2.value);
        m7[1]=parseInt(prva3.value);
        m7[2]=parseInt(prva5.value);
        m7[3]=parseInt(prva6.value);

        m8[0]=parseInt(prva1.value);
        m8[1]=parseInt(prva3.value);
        m8[2]=parseInt(prva4.value);
        m8[3]=parseInt(prva6.value);

        m9[0]=parseInt(prva1.value);
        m9[1]=parseInt(prva2.value);
        m9[2]=parseInt(prva4.value);
        m9[3]=parseInt(prva5.value);

        let matricaX=new Array(9);
        matricaX[0]=de(m1);
        matricaX[3]=-1*de(m2);
        matricaX[6]=de(m3);
        matricaX[1]=-1*de(m4);
        matricaX[4]=de(m5);
        matricaX[7]=-1*de(m6);
        matricaX[2]=de(m7);
        matricaX[5]=-1*de(m8);
        matricaX[8]=de(m9);
    
        determinantaA=de3x3A()

        if(determinantaA===0){
            alert("Determinanta je 0")
        }
        else{
            let c=1/determinantaA;
            treca1.innerText=(matricaX[0]*c).toFixed(3)
            treca2.innerText=(matricaX[1]*c).toFixed(3)
            treca3.innerText=(matricaX[2]*c).toFixed(3)
            treca4.innerText=(matricaX[3]*c).toFixed(3)
            treca5.innerText=(matricaX[4]*c).toFixed(3)
            treca6.innerText=(matricaX[5]*c).toFixed(3)
            treca7.innerText=(matricaX[6]*c).toFixed(3)
            treca8.innerText=(matricaX[7]*c).toFixed(3)
            treca9.innerText=(matricaX[8]*c).toFixed(3)
        }
    });

    inverzB.addEventListener("click",()=>{
        m1[0]=parseInt(druga5.value);
        m1[1]=parseInt(druga6.value);
        m1[2]=parseInt(druga8.value);
        m1[3]=parseInt(druga9.value);
    
        m2[0]=parseInt(druga4.value);
        m2[1]=parseInt(druga6.value);
        m2[2]=parseInt(druga7.value);
        m2[3]=parseInt(druga9.value);

        m3[0]=parseInt(druga4.value);
        m3[1]=parseInt(druga5.value);
        m3[2]=parseInt(druga7.value);
        m3[3]=parseInt(druga8.value);

        m4[0]=parseInt(druga2.value);
        m4[1]=parseInt(druga3.value);
        m4[2]=parseInt(druga8.value);
        m4[3]=parseInt(druga9.value);

        m5[0]=parseInt(druga1.value);
        m5[1]=parseInt(druga3.value);
        m5[2]=parseInt(druga7.value);
        m5[3]=parseInt(druga9.value);

        m6[0]=parseInt(druga1.value);
        m6[1]=parseInt(druga2.value);
        m6[2]=parseInt(druga7.value);
        m6[3]=parseInt(druga8.value);

        m7[0]=parseInt(druga2.value);
        m7[1]=parseInt(druga3.value);
        m7[2]=parseInt(druga5.value);
        m7[3]=parseInt(druga6.value);

        m8[0]=parseInt(druga1.value);
        m8[1]=parseInt(druga3.value);
        m8[2]=parseInt(druga4.value);
        m8[3]=parseInt(druga6.value);

        m9[0]=parseInt(druga1.value);
        m9[1]=parseInt(druga2.value);
        m9[2]=parseInt(druga4.value);
        m9[3]=parseInt(druga5.value);

        let matricaX=new Array(9);
        matricaX[0]=de(m1);
        matricaX[3]=-1*de(m2);
        matricaX[6]=de(m3);
        matricaX[1]=-1*de(m4);
        matricaX[4]=de(m5);
        matricaX[7]=-1*de(m6);
        matricaX[2]=de(m7);
        matricaX[5]=-1*de(m8);
        matricaX[8]=de(m9);
    
        determinantaA=de3x3B()

        if(determinantaA===0){
            alert("Determinanta je 0")
        }
        else{
            let c=1/determinantaA;
            treca1.innerText=(matricaX[0]*c).toFixed(3)
            treca2.innerText=(matricaX[1]*c).toFixed(3)
            treca3.innerText=(matricaX[2]*c).toFixed(3)
            treca4.innerText=(matricaX[3]*c).toFixed(3)
            treca5.innerText=(matricaX[4]*c).toFixed(3)
            treca6.innerText=(matricaX[5]*c).toFixed(3)
            treca7.innerText=(matricaX[6]*c).toFixed(3)
            treca8.innerText=(matricaX[7]*c).toFixed(3)
            treca9.innerText=(matricaX[8]*c).toFixed(3)
        }
    });