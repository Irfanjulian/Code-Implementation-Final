const sortirAngka = (angka) => {

    let sortir = angka.toString().split('0').map(item => 
        item.split('').sort((a,b)=>a-b).join('')).join('');

    let hasilAkhir = parseInt(sortir)
    
    console.log(hasilAkhir);
}
sortirAngka(59560560159466056)