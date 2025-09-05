document.addEventListener('DOMContentLoaded',()=>{
    const valueInput= document.getElementById("value");
    const unit1= document.getElementById("unit1");
    const unit2= document.getElementById("unit2");
    const submitBtn = document.getElementById("submit");
    const resultOutput = document.getElementById("results");

   function getUnitSymbol(unit){
    const symbols ={
        'celsius':'C',
        'fahrenheit':'F',
        'kelvin':'K',
    }; return symbols[unit]|| unit
   }

submitBtn.addEventListener('click',()=>{
    const value=parseFloat(valueInput.value);
    if(isNaN(value)){
    document.getElementById('results').innerHTML="please enter a valid temp value";
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
    const fromSymbol= getUnitSymbol(fromUnit);
    const toSymbol =getUnitSymbol(toUnit);
    const resultString= `${value} ${fromSymbol} are ${result.toFixed(2)} ${toSymbol}`;
    resultOutput.innerHTML = resultString;
   
    
    


});
});
