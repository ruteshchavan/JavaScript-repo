  /*
  event listener function allows you to create custom responses to events like mouse clicks, keyboard clicks, and window resizing.

  syntax :
  node.addEventListener(event,callback)

  */

  let val=document.querySelector('#aa');

  val.addEventListener("click", ()=>{
    console.log('event handled sucessfully..')
  })
