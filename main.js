document.getElementById("calcBtn").onclick = function () {
    // ناخد القيم من الـ input
    let faddan = Number(document.getElementById("faddan").value);
    let qerat = Number(document.getElementById("qerat").value);
    let sahm = Number(document.getElementById("sahm").value);
    //   تحذير القيم السالبة
    if (faddan < 0 || qerat < 0 || sahm < 0) {
        alert("عفوا لا يمكن ادخال القيم السالبة")
        return;
    }

    // نحسب المساحة بالمتر
    let result = (faddan * 4200.83) + (qerat * 175.0369) + (sahm * 7.2932);

    // نعرض النتيجة
    document.getElementById("result").value = result.toFixed(2) + " م2";
};
document.getElementById("clearBtn").onclick = function () {
    document.getElementById("faddan").value = "";
    document.getElementById("qerat").value = "";
    document.getElementById("sahm").value = "";
    document.getElementById("result").value = "";
}

// //////////////////////////////////////////////////////////////////////

// تحويل الفدادين الي متر

const faddanM2 = 4200.83;
const qeratM2 = faddanM2 / 24;
const sahmM2 = qeratM2 / 24;

// document.getElementById("calcBtn2").onclick = function () {
//     // حساب المعادلات
//     const meters = Number(document.getElementById("result2").value || 0 );
//     const faddanTrans = Math.floor(meters / faddanM2);
//     const remFadddan = (meters % faddanM2) ;
//     const qeratTrans =Math.floor(remFadddan / qeratM2);
//     const remQerat = (remFadddan % qeratM2  ) ; 
//     const sahmTrans = (remQerat / sahmM2 ).toFixed(2);  

//     // نعرض النتيجة
//     document.getElementById("faddan2").value = faddanTrans ;
//     document.getElementById("qerat2").value = qeratTrans;
//     document.getElementById("sahm2").value = sahmTrans;

// }
// // clear button
// document.getElementById("clearBtn2").onclick = function () {
//     document.getElementById("faddan2").value = "" ;
//     document.getElementById("qerat2").value = "";
//     document.getElementById("sahm2").value = "" ;
//     document.getElementById("result2").value = "" ;
// }
// // 

// الثوابت

document.getElementById("calcBtn2").onclick = function () {
    const inputText = document.getElementById("result2").value.trim();
    const tableBody = document.querySelector("#resultTable tbody");


    // تقسيم القيم (سواء كانت مفصولة بفواصل أو في سطور)
    const values = inputText.split(/[\n,،]+/).map(v => v.trim()).filter(v => v !== "");

    // لو مفيش قيم صحيحة
    if (values.length === 0) {
        alert("لم يتم إدخال أي قيم صحيحة");
        return;
    }

    // مسح الجدول القديم
    tableBody.innerHTML = "";

    values.forEach((val, index) => {
        const meters = Number(val);

        const row = document.createElement("tr");

        if (isNaN(meters)) {
            row.innerHTML = `<td>${index + 1}</td><td colspan="4" class="text-danger">⚠️ "${val}" ليست قيمة رقمية</td>`;
            tableBody.appendChild(row);
            return;
        }

        const faddan = Math.floor(meters / faddanM2);
        const remFaddan = meters % faddanM2;
        const qerat = Math.floor(remFaddan / qeratM2);
        const remQerat = remFaddan % qeratM2;
        const sahm = (remQerat / sahmM2).toFixed(2);

        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${meters.toLocaleString()}</td>
      <td>${faddan}</td>
      <td>${qerat}</td>
      <td>${sahm}</td>
    `;
        tableBody.appendChild(row);
    });
    document.getElementById("downloadExcel").classList.remove("d-none");

};
// تحميل النتايج

document.getElementById('downloadExcel').onclick = function () {
    
  const table = document.getElementById("resultTable");
  const rows = table.querySelectorAll("tbody tr");
    const wb = XLSX.utils.table_to_book(table, { sheet: "النتائج" });
    XLSX.writeFile(wb, "التحويل_من_المتر.xlsx");
 
};

// مسح النتايج

document.getElementById("clearBtn2").onclick = function () {
    document.getElementById("result2").value = "";
    document.querySelector("#resultTable tbody").innerHTML = `
    <tr>
      <td colspan="5" class="text-muted">النتائج ستظهر هنا بعد الحساب...</td>
    </tr>`;
    document.getElementById("downloadExcel").classList.add("d-none");
};
