

        // 타이핑 작성 및 삭제 기능 구현
        const text  =document.querySelector(".typing");
        let context = ["WELCOME TO MY PORTFOLIO",];// 9글자  0~8 번째

        // 0 부터 8까지 1씩 증가될 변수
        let charIndex = 0;
        // 8 부터 0까지 1씩 감소될 변수
        let maxIndex;
        let stringNumber = 0 ;

        // 자동실행함수 setInterval 사용 일정시간마다 글자 타이핑
        
        let autoTyping = setInterval(function(){  //0.2초마다 펀션함수 실행
            
            textToggle();// 함수호출
        },200);

        function textToggle(){
            // 텍스트 나오는 구간
            if(charIndex < context[stringNumber].length){
                text.innerText += context[stringNumber].charAt(charIndex);      // 1개씩 추가 +=
                charIndex++; // 숫자 1증가
                // 텍스트순번값이 글자 갯수를 초과했는지 
                if(charIndex >= context[stringNumber].length){ // 글자가 다찻을때 실행되는 if문 8~9로바뀌면 실행

                    maxIndex = context[stringNumber].length; // 9  maxIdex는 글자를 감소시켜서 출력하기 위한 순번값
                    // 자동실행멈춤 및 다시 시작 코드 함수
                    stopAndStart();
                }   
            }
            // 텍스트 한글자씩 없에는 구간 0보다 크거나 같으면 참
            else if(maxIndex >= 0 ){  // 글자가 다나와있음
                text.innerText = context[stringNumber].substring(0,maxIndex);  // 새로 대입
                maxIndex--; // 숫자 1 감소
                if(maxIndex < 0 ){
                    charIndex = 0; // 숫자값 다시 초기화
                    // 자동실행 멈춤 및 자동실행 다시 시작
                    if(stringNumber == context.length-1){
                        stringNumber = 0
                    }
                    else{
                        stringNumber++;
                    }
                    stopAndStart();
                }
            }
        }

        function stopAndStart(){
            clearInterval(autoTyping);
            setTimeout(function(){
                autoTyping = setInterval(function(){
                    textToggle();
                },200)
            },3000)
        }