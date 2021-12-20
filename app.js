function calc(){
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);

    let oper = document.getElementById('operators').value;

    if(oper === '+'){
         document.getElementById('result').value = num1 + num2;
    }

    if(oper === '-'){
        document.getElementById('result').value = num1 - num2;
   }

    if(oper === '/'){
        document.getElementById('result').value = num1 / num2;
}

    if(oper === 'x'){
        document.getElementById('result').value = num1 * num2;
}

}

let numInput1 = document.getElementById('number1');
let numInput2 = document.getElementById('number2');

let reg = /\D/g;

numInput1.oninput = function(){
    if (this.value.match(reg)){
        this.value = this.value.replace(reg, '');
        this.classList.add('invalid');
    }else{
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
}
numInput2.oninput = function(){
    if (this.value.match(reg)){
        this.value = this.value.replace(reg, '');
        this.classList.add('invalid');
    }else{
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
}


