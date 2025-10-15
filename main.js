document.getElementById("calcBtn").onclick = function () {
  // ناخد القيم من الـ input
  let faddan = Number(document.getElementById("faddan").value);
  let qerat = Number(document.getElementById("qerat").value);
  let sahm = Number(document.getElementById("sahm").value);

  // نحسب المساحة بالمتر
  let result = (faddan * 4200.83) + (qerat * 175.0369) + (sahm * 7.2932);

  // نعرض النتيجة
  document.getElementById("result").value = result.toFixed(2) + " م2";
};
document.getElementById("clearBtn").onclick = function () {
    document.getElementById("faddan").value = "" ;
    document.getElementById("qerat").value = "";
    document.getElementById("sahm").value = "" ;
    document.getElementById("result").value = "" ;
}
// //////////////////////////////////////////////////////////////////////

// تحويل الفدادين الي متر

const faddanM2 = 4200.83 ;
const qeratM2 = faddanM2 / 24 ;
const sahmM2 =  qeratM2 / 24 ; 

document.getElementById("calcBtn2").onclick = function () {
    const meters = Number(document.getElementById("result2").value || 0 );
    const faddanTrans = Math.floor(meters / faddanM2);
    const remFadddan = (meters % faddanM2) ;
    const qeratTrans =Math.floor(remFadddan / qeratM2);
    const remQerat = (remFadddan % qeratM2  ) ; 
    const sahmTrans = (remQerat / sahmM2 );  
    // نعرض النتيجة
    document.getElementById("faddan2").value = faddanTrans ;
    document.getElementById("qerat2").value = qeratTrans;
    document.getElementById("sahm2").value = sahmTrans ;
}
// clear button
document.getElementById("clearBtn2").onclick = function () {
    document.getElementById("faddan2").value = "" ;
    document.getElementById("qerat2").value = "";
    document.getElementById("sahm2").value = "" ;
    document.getElementById("result2").value = "" ;
}
