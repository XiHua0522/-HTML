const [swithDivContain] = document.getElementsByClassName('swithDivContain')
const [indexImgDiv] = document.getElementsByClassName('indexImg')
const [showMeDiv] = document.getElementsByClassName('showMe')

const swithDiv = (e) => {
    if (e.wheelDelta < 0) {
        indexImgDiv.classList.add('indexImgMoveup')
        showMeDiv.classList.add('showMeMoveup')
    } else if (e.wheelDelta > 0) {
        indexImgDiv.classList.remove('indexImgMoveup')
        showMeDiv.classList.remove('showMeMoveup')
    }
}

const swithDivTouch = (e1) => {
    console.log(e1.changedTouches[0].screenY);
    swithDivContain.addEventListener('touchend', (e2) => {
        console.log(e2.changedTouches[0].screenY < e1.changedTouches[0].screenY);
        if (e2.changedTouches[0].screenY < e1.changedTouches[0].screenY) {
            console.log(666);
            indexImgDiv.classList.add('indexImgMoveup')
            showMeDiv.classList.add('showMeMoveup')
        } else if (e2.changedTouches[0].screenY > e1.changedTouches[0].screenY) {
            indexImgDiv.classList.remove('indexImgMoveup')
            showMeDiv.classList.remove('showMeMoveup')
        }
    })
}

setTimeout(() => {
    swithDivContain.addEventListener('mousewheel', swithDiv)
    swithDivContain.addEventListener('touchstart', swithDivTouch)
}, 2000);

