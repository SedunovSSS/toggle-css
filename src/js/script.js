function change(){
    if (document.getElementById('toggle').getAttribute('class') == 'toggle'){
        document.getElementById('toggle').setAttribute('class', 'toggle-active');
        document.getElementById('ball').setAttribute('class', 'ball-active');
        document.querySelector('body').setAttribute('class', 'body-active');
    }
    else{
        document.getElementById('toggle').setAttribute('class', 'toggle');
        document.getElementById('ball').setAttribute('class', 'ball');
        document.querySelector('body').setAttribute('class', 'body');
    }
}