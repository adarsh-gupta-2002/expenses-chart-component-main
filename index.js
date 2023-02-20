
 
const binAndDays = document.querySelectorAll('.bin-and-day')
const bins = document.querySelectorAll('.bin')
const days = document.querySelectorAll('.day')
const amounts = document.querySelectorAll('.amount')
let dataArray =[]

const data= [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

bins.forEach((bin , index) => {
    bin.addEventListener('mouseover' , () =>{
        console.log(amounts)
        amounts[index].style.display = 'unset'
        amounts[index].textContent = '$'+ data[index].amount
       
        console.log(span)
    })
    
})
bins.forEach((bin , index) => {
    bin.addEventListener('mouseout' , () =>{
        
        amounts[index].style.display = 'none'
        
    })
    
})

function setStats(){

    data.forEach((day , index) =>{
        amount = day.amount
        amount =  amount* 2.5
        
        percent = amount + 'px'
        
        
         
        days[index].textContent = day.day
        bins[index].style.height = percent
    })

}

setStats()







 

