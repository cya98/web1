//  옵셔널 파라미터 (Optional Parameters)
function introduce(name, age, nationality = '한국'){ //nationality = '한국' 같은것을
  //옵셔널 파라미터라고 정해진 파라미터 이다 선언할때 맨 뒤에다가 넣어주어야함
console.log(`제 이름은 ${name}입니다.`);
console.log(`나이는 ${age}살 이고,`);
console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 23, '미국') //값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4); //파라미터 값을 생략한 경우
