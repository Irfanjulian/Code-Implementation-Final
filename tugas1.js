const cekPalindrom = (kata) => {
    return new Promise ((resolve, reject)=>{
        let cek = kata.toLowerCase()
        let cek1 = kata.split('').reverse().join('').toLowerCase()
        // let hasil
        if(cek1 === cek){
            resolve (`Keyword yang anda input adalah palindrome`)
        } else {
            reject (`Keyword yang anda input bukan palindrome`)
        }    
    })
}
cekPalindrom('MaLam')
.then((hasil)=>{console.log(hasil);})
.catch((err)=>{console.log(err);})