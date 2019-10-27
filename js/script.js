/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Rosio Dorson
******************************************/
const studentList = document.querySelector('.student-list').children;
const itemsPerPage = 10;

function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage - 1;
   for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }  
   }
}


function appendPageLinks (list) {
   const pages = studentList.length / itemsPerPage; 
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   const appendDiv = document.querySelector('.page');
   appendDiv.appendChild(newDiv);
   const ulDiv = document.createElement('ul');
   newDiv.appendChild(ulDiv);

    for (let i = 1; i <= pages; i++) {
      const li = document.createElement('li');
      ulDiv.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.textContent = i;
      const allButtons = document.querySelectorAll('a');
      a.addEventListener('click', (event) => {
         for (let i = 0; i < allButtons.length; i++) {
        
         allButtons[i].className = '';
      
         event.target.className = 'active';
         showPage(studentList, i);
         }
      })
   }
}




showPage(studentList, 1);
appendPageLinks();