let 손흥민 = {
	직업 : '축구선수',
	국적 : '대한민국',
    키 : 188,
    등번호 : 7,
    생년월일 : '1992-07-08',
}
//객체에 접근하는 방법 (. 또는 [])
document.write(손흥민.직업);
document.write(손흥민["직업"]);

console.log(손흥민);

//객체에 프로퍼티 추가하기
손흥민.팀 = '토트넘 홋스퍼';
손흥민["혈액형"]= 'AB';


//객체의 프로퍼티 수정하기 /객체는 실시간으로 업뎃
손흥민.직업 = 'Altlete';
손흥민["국적"] = 'south korea';

//객체의 프로퍼티삭제하기
delete 손흥민.등번호;
delete 손흥민['생년월일'];

console.log(손흥민); //

