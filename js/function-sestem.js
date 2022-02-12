document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // console.log(depositeAmount);

    // get input value add
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDeposite = parseFloat(depositeTotalText);
    // console.log(depositeTotalText);
    // depositeTotal.innerText = depositeAmountText;
    depositeTotal.innerText = previousDeposite + depositeAmount;

    // clear input value
    depositeInput.value = '';

    // add balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

})

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(depositeAmount);

    // get input value add
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdraw = parseFloat(withdrawTotalText);
    // console.log(depositeTotalText);
    // depositeTotal.innerText = depositeAmountText;
    withdrawTotal.innerText = previouswithdraw + withdrawAmount;

    // minus balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear input value
    withdrawInput.value = '';
})
