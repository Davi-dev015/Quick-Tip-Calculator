function formatMoney(value) {
    value = value.toFixed(2)
    return '$' + value
}
function update() {
    let billInput = Number(document.getElementById("yourBill").value)
    let tipPercent = Number(document.getElementById("tipInput").value)
    let split = document.getElementById("splitInput").value
    let tipValue = billInput * (tipPercent / 100 )
    let total = billInput + tipValue
    let billEach = total / split
    document.getElementById("tipPercent").innerHTML = tipPercent + '%'
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue)
    document.getElementById("totalWithTip").innerHTML = formatMoney(total)
    document.getElementById("splitValue").innerHTML = split
    document.getElementById("billEach").innerHTML = formatMoney(billEach)
}

