export class App {
  message = 'Hello World!';

  attached(){

      /* transition top of child ul's */
  }
  adjustUlTopPosition(event){
    var parentLiOffset = event.target.offsetTop
    var childUl = event.target.querySelector('.ulOptions')
    childUl !== null ?childUl.style.top = parentLiOffset+'px' : null
  }
}
