function validateProject(book) {
    let validation = true;
    if (Project.title === '') {
      const author = document.getElementById('authormsj');
      author.innerHTML = "Author can't be blank";
      author.style.color = 'Red';
  
      validation = false;
    } else {
      const author = document.getElementById('authormsj');
      author.innerHTML = '';
    }
  
  
  
    return validation;
  }

  function validateTask(book) {
    if (book.author === '') {
        const author = document.getElementById('authormsj');
        author.innerHTML = "Author can't be blank";
        author.style.color = 'Red';
    
        validation = false;
      } else {
        const author = document.getElementById('authormsj');
        author.innerHTML = '';
      }
    
      if (book.title === '') {
        const title = document.getElementById('titlemsj');
        title.innerHTML = "Title can't be blank";
        title.style.color = 'Red';
    
        validation = false;
      } else {
        const title = document.getElementById('titlemsj');
        title.innerHTML = '';
      }
    
      if (book.pages <= 0) {
        const title = document.getElementById('pagesmsj');
        title.innerHTML = 'Create a book with more than 0 pages';
        title.style.color = 'Red';
    
        validation = false;
      } else {
        const title = document.getElementById('titlemsj');
        title.innerHTML = '';
      }
    }  