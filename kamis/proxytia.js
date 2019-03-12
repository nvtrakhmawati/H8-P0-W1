var nama = 'Nop';
var peran = 'ksatria';

if (peran === '' && nama === ''){
    console.log ("Nama harus diisi!");  
} else if (peran === ''){
    console.log ("Hallo " + nama + ", pilih peranmu untuk memulai game!" );
} else if (peran === 'ksatria'){
    console.log ("Selamat datang di Dunia Proxytia, " + nama);
    console.log ("Hallo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (peran === 'tabib'){
    console.log ("Selamat datang di Dunia Proxytia, " + nama);
    console.log ("Hallo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (peran === 'penyihir'){
    console.log ("Selamat datang di Dunia Proxytia, " + nama);
    console.log ("Hallo Penyihir Zero " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
} else {
    console.log("Data kosong");
}

