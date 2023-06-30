//compare the length of each string
//sort each string
//compare sorted string

//1st solution 0(n^2)
// function Anagram (s, t){
//    if(s.length !== t.length) return false;
//    let sSorted = s.split("").sort();
//       let tSorted = t.split("").sort();
//    // console.log("s",sSorted)
//    //  console.log("t",tSorted)
//     for(let i=0; i<sSorted.length; i++){
//         if(sSorted[i] === "undefined") return false ;
//         if(sSorted[i] !== tSorted[i]) return false ;
//     }
//     return true
// }

//2nd solution
//sort each string
//create a hash table for each sorted string
//compare the keys of each table to check matching

function Anagram(s,t){
    if(s.length !== t.length) return false;
    let sSort = s.split("").sort();
    let tSort = t.split("").sort();
    let sMap = {};
    let tMap = {};
    for(let i=0; i<s.length; i++){
        let letter = sSort[i];
        if(sMap[letter]){
            sMap[letter]++
        }else{
            sMap[letter] = 1
        }        
    }
    for(let i=0; i<t.length; i++){
        let letter = tSort[i];
        if(tMap[letter]){
            tMap[letter]++
        }else{
            tMap[letter] = 1
        }        
    }
    for(const sKey in sMap){
       if( sMap[sKey] !== tMap[sKey]) return false 
       if( sMap[sKey] === undefined) return false 
    }
    return true;
    //console.log("sMap is " , sMap);
   // console.log("tMap is " , tMap);
}
Anagram("anagram","nagaram") //true
//Anagram("car","rat") //false