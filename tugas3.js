const sortirAngka = (angka) => {

    let cari = angka.toString().split('0')
    let sortir = cari.slice(0,1).toString()
    let hasilSort = sortir.split('').sort().join('')
    let sortir1 = cari.slice(1,2).toString()
    let hasilSort1 = sortir1.split('').sort().join('')
    let sortir2 = cari.slice(2,3).toString()
    let hasilSort2 = sortir2.split('').sort().join('')
    let gabungan = (hasilSort + hasilSort1 + hasilSort2)
    let hasilAkhir = parseInt(gabungan)
    
    console.log(hasilAkhir);
}
    sortirAngka(5956560159466056)
