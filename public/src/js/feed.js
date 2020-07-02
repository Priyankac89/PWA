var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
  if(defferedPrompt){
    defferedPrompt.prompt();
    defferedPrompt.userChoice.then(function(choiceresult){
      console.log(choiceresult.outcome);
      if(choiceresult.outcome==='dismissed'){
        console.log('event cancelled');
      }
      else{
        console.log('user added to home screen');
      }
    })
    defferedPrompt = null;
  }
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
