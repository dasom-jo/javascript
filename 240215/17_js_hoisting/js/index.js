console.log(num);

let num1 = 123; //이후선언으로 선언되지않음에러/끌어올려지지않음

var num = 123;//선언은됨 undefind/ 이건 알아서 위로 올려짐/

//위로 올라가고 안오고를 호이스팅이라고라고힘

//하지만 function의경우 아래에 선언 가능 let 과차이:호출가능한 차이
//자바스크립트는 위에서 아래서 실해되는 인터프리터 언어
// 자바스크립트의 실행순서(호이스팅)
//1.parser라는것이 빌드진행하면서 문법 검사 
//->이때 코드 내에 선언할수있는것들을 모두 선언 
//-> 코드의 위치가 실제로 올라가는것은 아님
//->선언문의 사용범위가 위까지 확대되는것이다.

//함수선언문(이건 하단 선언 가능)
function sum() {
    return 1+1;
}

// 함수표현식
let sum = function() {
    return 1+1;
}

