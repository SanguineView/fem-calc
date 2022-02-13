// inputs
const billAmountField = document.getElementById('billAmount')
const peopleField = document.getElementById('peopleAmount')
const tipBtn = document.querySelectorAll('.tipSelect--choice')
const fivePercentBtn = document.getElementById('5p');
const tenPercentBtn = document.getElementById('10p');
const fifteenPercentBtn = document.getElementById('15p');
const twentyfivePercentBtn = document.getElementById('25p');
const fiftyPercentBtn = document.getElementById('50p');
const customTip = document.getElementById('customTip')
const personTipField = document.getElementById('personTip')
const personTotalField = document.getElementById('personTotal')
const resetBtn = document.getElementById('resetBtn')

// initial vars

let numPeople = 1
let billAmount = 0
let billTotal = 0
let tipAmount = 0

// set bill total based on input

const setBillAmount = () => {
    billAmount = parseInt(billAmountField.value)
    billTotal = billAmount + tipAmount
    console.log(`the bill is ${billAmount}`)
    personTotalField.textContent = `$${billAmount}`
}

billAmountField.addEventListener('change', setBillAmount)

// set tip percentage

const setButtonTipAmount = (e) => {
    let button = e.target.getAttribute("id")
    let tipPrct
    if (button == '5p') {
        tipPrct = 0.05
    } else if (button == '10p') {
        tipPrct = 0.10
    } else if (button == '15p') {
        tipPrct = 0.15
    } else if (button == '25p') {
        tipPrct = 0.25
    } else if (button == '50p') {
        tipPrct = 0.50
    }
    
    tipAmount = billAmount * tipPrct
    personTipField.textContent = `$${tipAmount}`
    console.log(`you're tipping ${tipAmount}`)
    updateBill()
}

tipBtn.forEach((button) => {
    button.addEventListener('click', setButtonTipAmount)
})

const setCustomTipAmount = (e) => {
    let tipPrct
    tipPrct = parseInt(customTip.value) / 100
    
    tipAmount = billAmount * tipPrct
    personTipField.textContent = `$${tipAmount}`
    console.log(`you're tipping ${tipAmount}`)
    updateBill()
}

customTip.addEventListener('change', setCustomTipAmount)

// updating people

const setPeopleAmount = () => {
    numPeople = parseInt(peopleField.value)
    updateBill()
}

// updating bill fn

const updateBill = () => {

    let newTotal = (billTotal + tipAmount) / numPeople
    personTotalField.textContent = `$${newTotal}`
    console.log(`the new total is ${newTotal}`)
}

peopleField.addEventListener('change', setPeopleAmount)

// reset 

const resetBill = () => {
    customTip.value = 0
    billAmountField.value = 0
    personTipField.textContent = 0.00
    personTotalField.textContent = 0.00
    peopleField.value = 1
}

resetBtn.addEventListener('click', resetBill)



