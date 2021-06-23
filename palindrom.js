class Palindrom {

    validate = (kalimat) =>{
        if(kalimat === null || kalimat.length < 3){
            return 'Kalimat kosong / kalimat kurang';
        }

        if(typeof(kalimat) !='string'){
            return 'data bukan string';
        }

        return this.processPalindrom(kalimat)
    }

    processPalindrom = (teks)=>{
        teks = teks.toLowerCase();
        let increament = Math.floor(teks.length / 2);
        for(let i = 0; i < increament; i++){
            if(teks[i] != teks[teks.length-(i+1)]){
                return 'Bukan Palindrom'
            }
        }
        return 'Palindrom'
    }
}

module.exports = Palindrom