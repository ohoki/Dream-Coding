//데이터 타입 - 문자열

let string='안녕하세요';
string = '"안녕!!"'; 
// ""가 쓰고 싶을 땐 외부 따음표와 다른 종류의 따음표를 사용하면 됨

//특수 문자 출력하는 법 ('MDN-이스케이프'에 더 자세히 나와있음)

string = '안녕! \n엘리야!'; //줄바꿈
string = '안녕! \n엘리야! \t\t내 이름은\\'; //탭사용, \ 출력 법 (2번쓰면됨)

console.log(string);

//템플릿 리터럴 (Template Literal)- ``를 사용해서 조금 더 편하게 특수문자 사용
let id = '엘리';
let greeting = "'안녕!," + id + "🖐\n즐거운 하루 보내요!'";

greeting = `'안녕, ${id}🖐
즐거운 하루 보내요!'`;
