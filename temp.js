function convert(){
    const temp=parseFloat(document.getElementById("num").value);
    const unit=document.getElementById("unit").value;
    let converttemp;

    if(unit==='celsius'){
        converttemp=(temp*9/5)+32;
        document.getElementById("result").textContent=`${temp} degrees Celsius=${converttemp} degrees Fahrenheit`;
    }

    if(unit==='fahrenheit'){
        converttemp=(temp-32)*5/9;
        document.getElementById("result").textContent=`${temp} degrees Fahrenheit=${converttemp} degrees Celsius`;
    }

    if(unit==='kelvin'){
        converttemp=temp+273.15;
        document.getElementById("result").textContent=`${temp} degrees Celsius=${converttemp} degrees Kelvin`;
    }
}

function resetFields(){
    document.getElementById("num").value = '';
    document.getElementById("unit").selectedIndex = 0;
    document.getElementById("result").textContent = '';
}