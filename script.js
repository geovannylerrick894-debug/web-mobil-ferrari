function selectCar(price) {
    document.getElementById("price").value = price;
}

function calculateCredit() {
    let price = parseFloat(document.getElementById("price").value);
    let dp = parseFloat(document.getElementById("dp").value);
    let tenor = parseFloat(document.getElementById("tenor").value);

    if (!price || !dp || !tenor) {
        alert("Please complete all fields");
        return;
    }

    let bunga = .2 * price
    let dpRupiah = (dp / 100) * price
    let total = (price + bunga ) - dpRupiah
    let tenorBulan = tenor * 12
    
    let monthly = total / tenorBulan;

    console.log(monthly)


    document.getElementById("result").innerText =
        "Monthly Payment: Rp " + monthly.toLocaleString();
}