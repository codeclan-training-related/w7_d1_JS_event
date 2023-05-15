//https://github.com/codeclan/e64_classnotes/blob/main/week_07/day_1/03_lab_events/lab_events.md

console.log('hello jiji ha')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form=document.querySelector('#new-item-form')
  form.addEventListener('submit',showForm)
})

//event is the submit action 
const showForm=function(event){
  event.preventDefault()
  const method=event.target
  const title=method.title.value
  const author=method.author.value
  const category=method.category.value

 

const parent=document.querySelector('#reading-list')
const child=document.createElement('li')
child.textContent=`Title: ${title}, Author: ${author}, Category: ${category}`
parent.appendChild(child)




  method.reset()
}
