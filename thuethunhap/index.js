function xuatthue() {
    var thunhapEl = document.getElementById("thunhap").value * 1
    var songuoiEl = document.getElementById("phuthuoc").value * 1
    var thunhapChiuThue = thunhapEl - 4 - songuoiEl * 1.6

    if (0 < thunhapChiuThue && thunhapChiuThue <= 60) {
        alert("Thuế:" + " 5%")
    } else if (thunhapChiuThue <= 120) {
        alert("Thuế:" + " 10%")
    } else if (thunhapChiuThue <= 210) {
        alert("Thuế:" + " 15%")
    }else if (thunhapChiuThue <= 384) {
        alert("Thuế:" + " 20%")
    }else if (thunhapChiuThue<=624){
        alert("Thuế:"+" 25%")
    }else if(thunhapChiuThue<=960){
        alert("Thuế:"+"30%")
    }else{
        alert("Thuế:"+"35%")
    }

}