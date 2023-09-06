function gameMonth() {
        let num= Number (prompt ('введите номер месяца'));
            if (num <= 0 || num >= 13 || isNaN(num) ) { 
                alert ('вы ввели неверное число');
                
        } else if (num === 1 || num === 2 || num===12) {
            alert ('зима');
                
            } else if (num===3 || num===4 || num===5 ) {
                alert ('весна');
                
            }else if (num===6 || num===7 || num===8 ) {
                alert ('лето');
    
            }else if (num===9 || num===10 || num===11) {
                alert ('осень');
            }    
}


function rememberWord() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);

    alert( fruits);
    
    let oneAnswer = prompt(`Чему равнялся первый элемент массива?`);

    let twoAnswer = prompt (`Чему равнялся последний элемент массива?`);


    if (fruits[0].toLowerCase() === oneAnswer.toLowerCase() && fruits[6].toLowerCase() === twoAnswer.toLowerCase()) {
        
        alert(`Вы угадали оба элемента!!`);

    } else if (fruits[0].toLowerCase() === oneAnswer.toLowerCase() || fruits[6].toLowerCase() === twoAnswer.toLowerCase()) {
        alert(`«Вы были близки к победе!`);

    }else {
            alert(`Вы ответили не верно`);
        }
    
    
}
