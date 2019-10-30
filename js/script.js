/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Rosio Dorson
******************************************/

// Create 2 global variables to store the student list and the number of students needed per page. 

const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
console.log(studentList);

// Create a function to hide all the students except the number given per page. Here it is 10 but the last page will have 4 since there are 54 students.
showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;
   // The loop starts with the first student or "0".
   for (let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }  
   }
}

// Create the appendPageLinks function to add and append the pagination links. 
appendPageLinks = (list) => {
   const pages = Math.ceil(list.length / itemsPerPage); 
   console.log(pages);
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
      showPage(studentList, i);
         for (let i = 1; i < allButtons.length; i++) {
         allButtons[i].className = '';
         event.target.className = 'active';
         }
      })
   }
}

// Call the showPage and appendPagelinks functions.
showPage(studentList, 1);
appendPageLinks(studentList);