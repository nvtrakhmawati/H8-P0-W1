function num1(){
    for (baris = 0; baris<5; baris++){
        console.log('*');
    }
}

function num2(){
    var stars = "";
        for (baris=0; baris<5; baris++){
            for (kolom = 0; kolom <5; kolom++){   
                stars = stars + "*";                              
             } 
             console.log(stars);
             stars="";                 
        }
        
}

function num3(){
    var stars = "";
    for (kolom = 0; kolom <5; kolom++){
        stars = stars + "*";
        console.log(stars);
    }
}
num1();
console.log('');
num2();
console.log('');
num3();
console.log('');
