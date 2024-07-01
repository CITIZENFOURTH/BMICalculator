//BMI คำนวณโดย = น้ำหนัก(กิโลกรัม) / ส่วนสูง(เมตร)ยกกำลังสอง
function bmicalculate()
{
    let w = document.getElementById("weight").value
    console.log(w)
    //ดึงค่านำ้หนักจาก element id = "weight" มาเก็บไว้ในตัวแปร "w"
    let h = document.getElementById("height").value / 100 
    console.log(h)
    //ดึงค่าส่วนสูงจาก element id = "height" มาเก็บไว้ในตัวแปร "h"
    // ส่วนสูงหารด้วย 100 เพื่อแปลงหน่วยเป็นเมตร
    let bmi = w / ( h * h )
    console.log(bmi.toFixed(2))
    //--------------------------------------------------------------
    //ส่วนวิเคระห์กายภาพจากค่า BMI ที่คำนวณได้
    //แล้วส่งค่าไปแสดงผลที่ element id = "analyse"
    if(bmi > 30) {
        document.getElementById("analyse").innerHTML = "อ้วนระดับ 3"
    }
    else  if(bmi >= 25) {
        document.getElementById("analyse").innerHTML = "อ้วนระดับ 2"
    }
    else if(bmi >= 23) {
        document.getElementById("analyse").innerHTML = "อ้วนระดับ 1"
    }
    else if(bmi >= 18.5){
        document.getElementById("analyse").innerHTML = "ปกติ สุขภาพดี"
    }
   else {
        document.getElementById("analyse").innerHTML = "น้ำหนักน้อย / ผอม"
    }
    //แสดงค่า BMI โดยการ alert และส่งค่าไปแสดงใน element id ="result"
    alert("ค่า BMI ของคุณเท่ากับ : "+ bmi.toFixed(2))
    document.getElementById("result").innerHTML = "BMI " + " = " + "<b>" + bmi.toFixed(2) + "</b>"
}
bmicalculate()
