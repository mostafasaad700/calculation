
document.getElementById("calcBtn").onclick = function () {
  // ناخد القيم من الـ input
  let faddan = Number(document.getElementById("faddan").value);
  let qerat = Number(document.getElementById("qerat").value);
  let sahm = Number(document.getElementById("sahm").value);

  // نحسب المساحة بالمتر
  const result = (faddan * 4200.83) + (qerat * 175.0369) + (sahm * 7.2932);

  // نعرض النتيجة
  document.getElementById("result").value = result.toFixed(2) + " m²";
};

