function num1(){
  console.log('LOOPING PERTAMA');
  var angka = 2;
  while (angka <=20){
    console.log(angka + ' - I Love Coding');
    angka += 2;
  }

  console.log('LOOPING KEDUA');
    var num = 20;
    while (num >= 2){
      console.log(num + ' - I will become fullstack developer ');
      num -= 2;
  }
}

function num2(){
  console.log('LOOPING PERTAMA');
    for (angka = 1; angka <=20; angka++){
        console.log(angka + ' - I Love Coding');
    }

  console.log('LOOPING KEDUAA');
    for (angka = 20; angka >=1; angka--){
        console.log(angka + ' - I will become fullstack developer');
    }
}

function ganjilgenap(){
    for (angka = 1; angka <=100; angka++){
        if (angka % 2){
            console.log(angka + ' GANJIL');
        } else {
            console.log(angka + ' GENAP');
        }
    }
}
function penambahan2(){
    for (angka = 1; angka <=100; angka+= 2){
        if (angka%3 === 0){
            console.log(angka + ' kelipatan 3');
        } else {
            console.log('');
        }
    }
}

function penambahan5(){
    for (angka = 1; angka <=100; angka+= 5){
        if (angka%6 === 0){
            console.log(angka + ' kelipatan 6');
        } else {
            console.log('');
        }
    }
}

function penambahan9(){
    for (angka = 1; angka <=100; angka+= 9){
        if (angka%9 === 0){
            console.log(angka + ' kelipatan 10');
        } else {
            console.log('');
        }
    }
}

num1();
console.log('\n');
num2();
console.log('\n');
ganjilgenap();
console.log('\n');
penambahan2();
console.log('\n');
penambahan5();
console.log('\n');
penambahan9();
console.log('\n');
