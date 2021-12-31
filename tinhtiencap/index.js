function tinhtien() {
    var loaiKhachHang = document.getElementById("khachhang").value
    var kenhCaoCap = document.getElementById("kenh").value * 1
    var ketNoi = document.getElementById("ketnoi").value * 1
    var tongtien
    switch (loaiKhachHang) {
        case "nhadan":
            tongtien = 4.5 + 20.5 + 7.5 * kenhCaoCap;
            alert("Tổng tiền:" + " " + tongtien + "$")
            break;
        case "doanhnghiep":
            if (0 < ketNoi && ketNoi <= 10) {
                tongtien = 15 + 7.5 * ketNoi + 50 * kenhCaoCap
            }
            else {
                tongtien = 15 + 75 + (ketNoi-10)*5 + 50 * kenhCaoCap

            }
            alert("Tổng tiền:" + " " + tongtien + "$")
            break;
    }
}
