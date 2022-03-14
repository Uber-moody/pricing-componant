let view = document.getElementById('pageview'); /**line27 in index.html */
let cost = document.getElementById('cost'); /**line30 in index.html */
let cost2 = document.getElementById('cost2'); /**line39 in index.html */
let slider = document.getElementById('price-slider'); /**line36 in index.html */
let toggle = document.getElementById('billing'); /**line41 in index.html */
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;


slider.addEventListener('input' , function(){ 
    updateValue();
    view.innerHTML = pageViews[slider.value]/**this change the page view value */


    let value = this.value * 25; /**this line and line 19 makes sure the gradient changes when with the slider toggle/button.i am not sure why its timed by 25 tho*/

    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%, 
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`

});

toggle.addEventListener('change', function(){
    if(isYearly == false){
        isYearly = true;
    } else {
        isYearly == false;
    }
    updateValue()
});

function updateValue(){/**this is to change/update to discounted value whenever the monthly/yearly billing toggle is turned */
    if(isYearly){
        cost.innerHTML = perMonth[slider.value] * .75 
        cost2.innerHTML = perMonth[slider.value] * .75 
    } else {
        cost.innerHTML = perMonth[slider.value]
        cost2.innerHTML = perMonth[slider.value]
    }
}