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