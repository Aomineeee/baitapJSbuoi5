function tinhdiem() {
    var diemchuanEl = document.getElementById("diemchuan").value * 1
    var mon1El = document.getElementById("mon1").value * 1
    var mon2El = document.getElementById("mon2").value * 1
    var mon3El = document.getElementById("mon3").value * 1
    var khuvucEl=document.getElementById("khuvuc").value
    var doituongEl=document.getElementById("doituong").value
    if (mon1El == 0 || mon2El == 0 || mon3El == 0) {
        alert("Không đủ điều kiện")
    } else {
        var tongDiem = (mon1El + mon2El + mon3El)/3
        
        switch (khuvucEl) {
            case "a":
                tongDiem += 2;
                break;
            case "b":
                tongDiem+=1;
                break;
            case "c":
                tongDiem+=0.5;
                break;
        }
        switch (doituongEl) {
            case "1":
                tongDiem += 2.5;
                break;
            case "2":
                tongDiem+=1.5;
                break;
            case "3":
                tongDiem+=1;
                break;
        }
        if (tongDiem >= diemchuanEl) {
            alert("Trúng tuyển:"+" "+tongDiem+"đ")
        }else{
            alert("Không trung tuyển:"+" "+tongDiem+"đ")
        }
        
    }
    
}