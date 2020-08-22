

const icon = document.querySelector('th a');
const tableRowElements = document.querySelectorAll('tbody tr');


const animation = (time) => {
  tableRowElements.forEach((elem, i) => {
    setTimeout(() => {
      elem.style.opacity = `${time}`;
      elem.style.transition = 'all 1s';
    },i * 300)
  })
}

const sortElements = () =>{
    const sortArr = []
    tableRowElements.forEach(elem => sortArr.push(elem));
    sortArr.sort((a,b) => {
       return (a.querySelector('td:last-of-type').textContent).split(':').join('') - (b.querySelector('td:last-of-type').textContent.split(':').join(''))
    })
    return sortArr
}

const updateContentAndIcon = () =>{
  const iconButton = icon.firstElementChild;
  const newContentArray = [];
  const sortedArray = iconButton.classList.contains('fa-caret-up') ? sortElements() : sortElements().reverse();

  sortedArray.forEach((elem) => {newContentArray.push(elem.innerHTML)}) ;
  tableRowElements.forEach((elem, i) =>{
    elem.innerHTML = newContentArray[i]
  })

  iconButton.classList.toggle('fa-caret-down');
  iconButton.classList.toggle('fa-caret-up');
  animation(0);
  setTimeout(()=> {
    animation(100);
  }, 1000)
  
}

 const formatSeconds = () => {
    const totalSeconds = document.querySelectorAll('td:last-child');
    const totalSecondsInArray = Object.values(totalSeconds)
       
    totalSecondsInArray.forEach(cell=> {
      const time = cell.innerHTML
      const sec = time % 60
      const min = Math.floor((time % 3600) / 60)
      const hours = Math.floor(time / 3600)
    return cell.innerHTML = `${hours}:${min}:${sec}`
    })
 }
formatSeconds()
icon.addEventListener('click',updateContentAndIcon )

