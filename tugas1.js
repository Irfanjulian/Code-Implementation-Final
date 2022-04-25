// Cek Palindrome
// const cekPalindrom = (kata) => {
//     if(typeof kata === 'string'){
//         let cek = kata.toLowerCase()
//         let cek1 = kata.split('').reverse().join('').toLowerCase()
//         // let hasil
//         if(cek1 === cek){
//             console.log(`Keyword yang anda input adalah palindrome`)
//         } else {
//             console.log(`Keyword yang anda input bukan palindrome`)
//         }
//     } else {
//         console.log('Anda harus memasukan huruf');
//     }    
// }

// cekPalindrom(123)

// Reverse Word
const reverseWord = (kalimat) => {

    if(typeof kalimat === 'string'){
        let word = kalimat.split(' ').reverse().join(' ');
        console.log (`Ini hasil reverse nya = ${word}`);
    }
    else{
        console.log (`Masukan kalimat dengan huruf`);
    }
    // console.log(word);
}
reverseWord(123);
