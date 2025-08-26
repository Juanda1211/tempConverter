document.addEventListener('DOMContentLoaded',()=>{
    const valueInput= document.getElementById("value");
    const unit1= document.getElementById("unit1");
    const unit2= document.getElementById("unit2");
    const submitBtn = document.getElementById("submit");
    const resultInput = document.getElementById("result");


submitBtn.addEventListener('click',()=>{
    const value=parseFloat(valueInput.value);
    if (isNaN(value)){
        alert('enter valid data');
        return;
    }
    const fromUnit = unit1.value;
    const toUnit =   unit2.value;

    let celsius;
     if(fromUnit==='celsius'){
        celsius=value;
     }else if (fromUnit==='fahrenheit'){
        celsius=(value-32)*(5/9);
     }else if (fromUnit==='kelvin'){
        celsius=value-273.15;
     }
     let result;
     if(toUnit ==='celsius'){
        result = celsius;
    }else if (toUnit ==='fahrenheit'){
        result= celsius*(9/5)+32;
    }else if(toUnit==='kelvin'){
        result=celsius+273.15;
    }
    resultInput.value =result.toFixed(2);
    console.log('Result:', result);


});
});