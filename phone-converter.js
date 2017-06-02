// function Phoneconverter(phoneStr){
// var noSpace = phoneStr.replace(/\s/g, "");
// var onlyNumbers = nospace.replace(/[^A-Za-z0-9]/g,"").toUpperCase();
// var seriouslyOnlyNumbers=onlyNumbers.replace(/[A-C]/g,"2").replace(/[D-F]/g,"3")
// console.log(onlyNumbers);
// console.log(serioslyOnlyNumbers);
// }
// Phoneconverter("1 2 g, tss, wwe 3");
//*****Use replace method to convert str to numbers*********
function phoneConverter(phoneStr){
    // var noSpace = phoneStr.replace(/\s/g, "");
    var onlyNumbers = phoneStr.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    var seriouslyOnlyNumbers = onlyNumbers.replace(/[A-C]/g, "2").replace(/[D-F]/g, "3").replace(/[G-I]/g, "4").replace(/[J-L]/g, "5").replace(/[M-O]/g, "6").replace(/[P-S]/g, "7").replace(/[T-V]/g, "8").replace(/[W-Z]/g, "9");
    var firstTen = seriouslyOnlyNumbers.match(/\d{10}/);
    var x = firstTen[0];
    var result = x[0]+x[1]+x[2]+"-"+x[3]+x[4]+x[5]+"-"+x[6]+x[7]+x[8]+x[9];
    console.log(result);
};

phoneConverter("1 2  af zh ,.43t,g.,gg3f    # 3 4");









//************ Narrow down to 10 numbers*****

//var numDigits = d{10}
