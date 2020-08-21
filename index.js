

const down1 = document.querySelector('th a');
const tableData = document.querySelectorAll('td.border')
const tableRows1 = document.querySelectorAll('tbody tr');
// const tableRows = Array.from(document.querySelector('tbody').children)
// const timeRow = document.querySelectorAll('.time');
// const cells = tableRows.map(cell => Array.from(cell.querySelectorAll('td')))

// console.log(tableRows1)

const changeOrder = () =>{
const sortArr = []
tableRows1.forEach((elem) => sortArr.push(elem));
// console.log(sortArr)

sortArr.sort((a,b) => {
  return (a.querySelector('td:last-of-type').textContent).split(':').join('') - (b.querySelector('td:last-of-type').textContent.split(':').join(''))
})
return sortArr
}


const handleClick = () =>{
  // const arr = changeOrder();
  const down = down1.firstElementChild;
  // console.log(down)
  console.log(arr)
  const htmlArr = [];
 const arr = down.classList.contains('fa-caret-up') ? changeOrder() : changeOrder().reverse();
  arr.forEach((elem) => {htmlArr.push(elem.innerHTML)}) 

  tableRows1.forEach((elem, i) =>{
    elem.innerHTML = htmlArr[i]
  })

down.classList.toggle('fa-caret-down');
  down.classList.toggle('fa-caret-up');
}

// console.log(tableRows1,tableRows, cells)

//   const arr = [];
//  cells.forEach((elem, index) => arr.push(elem[index].innerHTML))
//   console.log(arr)















// console.log(timeRow)
// console.log(tableRows[0].innerHTML)
// console.log(tableRows[0].querySelector('td:last-child').innerHTML )

// console.log(typeof tableData[2].innerHTML)
// console.log(typeof tableData[3].innerHTML)
const newArray = [];
const sortArr = []
 tableData.forEach((data) => {
  newArray.push(data.innerHTML)
 })

// function convertTime(cells) {
//  cells.forEach(cell => {
//    const time = cell[2].innerHTML
//    const sec = time % 60
//    const min = Math.floor((time % 3600) / 60)
//    const hours = Math.floor(time / 3600)
//    return cell[2].innerHTML = `${hours}:${min}:${sec}`
//  })
// }


 const time = () => {
   let totalSeconds = document.querySelectorAll('td:last-child');
   const arrayLast = Object.values(totalSeconds)
const {innerHTML} = totalSeconds

   console.log(arrayLast)
   arrayLast.forEach((cell, i)=> {
   const time = cell.innerHTML
   const sec = time % 60
   const min = Math.floor((time % 3600) / 60)
   const hours = Math.floor(time / 3600)
   return cell.innerHTML = `${hours}:${min}:${sec}`
 })
  //  console.log(totalSeconds)
  //  const hours = Math.floor(totalSeconds / 3600);
  //  totalSeconds %= 3600;
  // const minutes = Math.floor(totalSeconds / 60);
  // const seconds = (totalSeconds % 60)

  // console.log(hours,minutes, seconds)
  // return `${hours}:${minutes}:${seconds}`
 }

time()

sortArr = newArray.filter((value,index,Arr) => (index+1) % 3 == 0)
const numberArr = sortArr.sort((a, b) => a - b)

// const timearray = sortArr.map(elem =>{ return time(elem)});
// timeRow.forEach((elem, index) => {
//   elem.textContent = timearray[index]
// })
// console.log(timearray)
// console.log(newArray)
// console.log(sortArr)
// console.log(numberArr)
down1.addEventListener('click',handleClick )

