

const Validation = (() => {

  function validateProject(Project) {
     let validation = true;
     if (Project['_name'] === '') {
       const author = document.getElementById('projectMsj');
       author.innerHTML = "Author can't be blank";
       author.style.color = 'Red';
  
       validation = false;
     } else {
       const author = document.getElementById('projectMsj');
       author.innerHTML = '';
    }
  
  
  
     return validation;
  }

  function validateTask(task, type) {
 
    let validation = true;
    if (task['_title'] === '') {
        const title = document.getElementById(`titlemsj${type}`);
        title.innerHTML = "Author can't be blank";
        title.style.color = 'Red';
   
        validation = false;
      
      } else {
        const author = document.getElementById(`titlemsj${type}`);
        author.innerHTML = '';
      }
    
      if (task['_desc'] === '') {
        const title = document.getElementById(`descmsj${type}`);
        title.innerHTML = "Title can't be blank";
        title.style.color = 'Red';
    
        validation = false;
      } else {
        const title = document.getElementById(`descmsj${type}`);
        title.innerHTML = '';
      }
    
      if (task['_date'] === '') {
        const title = document.getElementById(`datemsj${type}`);
        title.innerHTML = 'Create a book with more than 0 pages';
        title.style.color = 'Red';
       
    
        validation = false;
      } else {
        const title = document.getElementById(`datemsj${type}`);
        title.innerHTML = '';
      }
  return validation
    }
    return{
      validateTask,
      validateProject
    }
  })()

  export default Validation