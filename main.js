const stars = document.querySelectorAll('.fa-star-o');
const starValue = document.querySelector('.selected-ratting-value');

let currentTotalSelectedStar = -1;


stars.forEach((starItem,index) => {
    starItem.dataset.rating = index+1;
    starItem.addEventListener('mouseover',handleMouseOver) 
    starItem.addEventListener('click',handleOnClick) 
    starItem.addEventListener('mouseleave',handleMouseLeave) 
});
function handleMouseOver(event){
  const currentRattingValue = event.target.dataset.rating;
  if(!currentRattingValue) return
  else handleUpdateRatingState(currentRattingValue);

}
function handleOnClick(event){
    const currentRattingValue = event.target.dataset.rating;
    currentTotalSelectedStar = currentRattingValue;
    handleUpdateRatingState(currentTotalSelectedStar);
    starValue.textContent = currentTotalSelectedStar;
}
function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelectedStar)
}
function handleUpdateRatingState(getCurrentRattingValue){
    for(let i=0;i<5;i++){
        if(i<getCurrentRattingValue){
            stars[i].classList.replace('fa-star-o','fa-star')
        }
        else{
            stars[i].classList.replace('fa-star','fa-star-o')
        }
    }
}