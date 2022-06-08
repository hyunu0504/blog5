function addSnow(){
    const snows = document.createElement('div') // div를 생성하는것을 축약해서 snows라는 변수에 넣기
    snows.classList.add('snow') // snows에 snow라는 class로 선언
    document.body.append(snows) // 그것을 body요소에 넣기
    snows.style.marginLeft = randomSnow(); // snows의 marginleft값을 randomSnow()로 지정
}
function randomSnow(){
    return Math.floor( Math.random() * window.innerWidth ) // Math.randomn으로 무작위 값이 window 창의 가로크기 안에서의 값만
    //    Math.fllor로  그 값의 소수값은 받지않음
}
for( i = 0; i < 200; i++ ){ 
    addSnow(); //200번이 실행되는 for문
}
