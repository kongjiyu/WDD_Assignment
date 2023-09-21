let _direction = true;
let _move = () => {
    let lists = document.querySelectorAll('.item');
    if(_direction){
        document.querySelector('#slide').appendChild(lists[0]); 
    }else{
        document.querySelector('#slide').prepend(lists[lists.length - 1]); 
    }

}

let timer = setInterval(_move, 2500);
document.querySelector('.intro').addEventListener('mouseover',() => {
    clearInterval(timer);
})
document.querySelector('.intro').addEventListener('mouseout',() => {
    timer = setInterval(_move, 2500);
})

document.querySelectorAll('.s_button')[1].onclick = () => {
    _move();
}

document.querySelectorAll('.s_button')[0].onclick = () => {
    _direction = false;
    _move();
}

