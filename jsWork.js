// inputs
const billAmountField = document.getElementById('billAmount')
const peopleField = document.getElementById('peopleAmount')
const tipBtn = document.querySelectorAll('.tipSelect--choice')
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

function setBillAmount() {
    billAmount = parseInt(billAmountField.value)

    if (isNaN(billAmount) || billAmount < 0) {
        alert('Sorry, the bill needs to be a positive numerical amount.')
        billAmountField.value = 0
        return
    } else {
        billTotal = billAmount + tipAmount
    }
    
    updateBill()
}

billAmountField.addEventListener('change', setBillAmount)

// set tip percentage

function setButtonTipAmount(e) {

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

function setCustomTipAmount(e) {
    tipPrct = parseInt(customTip.value) / 100
    tipBtn.forEach((button) => button.classList.remove('active'))

    if (isNaN(tipPrct) || tipPrct < 0) {
        alert('Sorry, the tip needs to be a positive numerical amount.')
        customTip.value = ''
        return
    } else {
        updateBill()
    }



    
}

customTip.addEventListener('change', setCustomTipAmount)

// updating people

function setPeopleAmount() {
    numPeople = parseInt(peopleField.value)

    if (isNaN(numPeople) || numPeople <= 0) {
        alert('Sorry, you need a number of people greater than 0.')
        peopleField.value = ''
    } else {
        updateBill()
    }
}

// updating bill fn

function updateBill() {

    tipAmount = (billAmount * tipPrct) / numPeople
    personTipField.textContent = `$${tipAmount.toFixed(2)}`

    let newTotal = (billTotal + tipAmount) / numPeople
    personTotalField.textContent = `$${newTotal.toFixed(2)}`
}

peopleField.addEventListener('change', setPeopleAmount)

// reset 

function resetBill() {
    billTotal = 0
    tipAmount = 0
    tipPrct = 0
    billAmountField.value = 0
    customTip.value = 0
    peopleField.value = 1
    personTipField.textContent = 0.00
    personTotalField.textContent = 0.00
    tipBtn.forEach((button) => button.classList.remove('active'))
}

resetBtn.addEventListener('click', resetBill)



