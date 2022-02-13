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
let tipPrct = 0

// set bill total based on input

const setBillAmount = () => {
    billAmount = parseInt(billAmountField.value)
    billTotal = billAmount + tipAmount
    
    updateBill()
}

billAmountField.addEventListener('change', setBillAmount)

// set tip percentage

const setButtonTipAmount = (e) => {

    tipBtn.forEach((button) => button.classList.remove('active'))
    customTip.value = 0
    e.target.classList.toggle('active')

    let button = e.target.getAttribute("id")
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
    

    updateBill()
}

tipBtn.forEach((button) => {
    button.addEventListener('click', setButtonTipAmount)
})

const setCustomTipAmount = (e) => {
    tipPrct = parseInt(customTip.value) / 100
    tipBtn.forEach((button) => button.classList.remove('active'))
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

    tipAmount = (billAmount * tipPrct) / numPeople
    personTipField.textContent = `$${tipAmount.toFixed(2)}`

    let newTotal = (billTotal + tipAmount) / numPeople
    personTotalField.textContent = `$${newTotal.toFixed(2)}`
}

peopleField.addEventListener('change', setPeopleAmount)

// reset 

const resetBill = () => {
    billTotal = 0
    customTip.value = 0
    billAmountField.value = 0
    personTipField.textContent = 0.00
    personTotalField.textContent = 0.00
    peopleField.value = 1
    tipBtn.forEach((button) => button.classList.remove('active'))
}

resetBtn.addEventListener('click', resetBill)



