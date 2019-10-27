/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Rosio Dorson
******************************************/
const studentList = document.querySelector('.student-list').children;
const itemsPerPage = 10;

function showPage(list, page) {
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
   const newDiv = document.createElement('newDiv');
   newDiv.className = 'pagination';
   const div = document.querySelector('.page');
   div.appendChild = (newDiv);
   const ul = document.createElement('ul');
   newDiv.appendChild = (ul);
   for (let i = 1; i <= pages; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.textContent = i;
      a.addEventListener('click', (event) => {
      showPage(studentList, i);
         for (i = 0; i <= pages + 1; i ++) {
           const active = document.querySelectorAll('a');
           active.className = ''
           event.target.className = 'active'
         }
      })
   }  
}


showPage(studentList, 1);
appendPageLinks();