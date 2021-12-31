function tinhtien() {
    var tieuthu = document.getElementById("sodien").value *1
    var tongtien
    if (1 <= tieuthu && tieuthu <= 50){
        tongtien=tieuthu*500
        alert("Tiền điện:"+tongtien+"vnđ")
    }
    else if (tieuthu<=100){
        tongtien=50*500+(tieuthu-50)*650
        alert("Tiền điện:"+tongtien+"vnđ")
    }
    else if (tieuthu<=200){
        tongtien=50*500+100*650+(tieuthu-100)*850
        alert("Tiền điện:"+tongtien+"vnđ")
    }
    else if (tieuthu<=350){
        tongtien=50*500+100*650+200*850+(tieuthu-200)*1100
        alert("Tiền điện:"+tongtien+"vnđ")
    }else{
        tongtien=50*500+100*650+200*850+350*1100+(tieuthu-350)*1300
        alert("Tiền điện:"+tongtien+"vnđ")
    }

}