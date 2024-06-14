// 1. "공부하러가기" 버튼
function pressBtn() {
    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelector('.pressBtn');

    modalOpen.addEventListener('click', function(){
        modal.style.display = 'block';
        setTimeout(function(){
            modal.style.display = 'none';
            location.href='../pages/study.html';
        }, 10000);
    });
}

// card 돌아가는 기능
class RotateCards {
    constructor(cards, cardSequnce) {
      this.cards = cards;
      this.cardSequnce = cardSequnce;
    }
  
    shuffle() {
      this.cards.forEach((item, index) => {
        const card = item;
        card.id = this.cardSequnce[index];
      });
    }
  
    moveLeft() {
      const value = this.cardSequnce.pop();
      this.cardSequnce.unshift(value);
  
      this.shuffle();
    }
  
    moveRight() {
      const value = this.cardSequnce.shift();
      this.cardSequnce.push(value);
      this.shuffle();
    }
}

// 2. card 공통기능
function card() {
    const cards = document.querySelectorAll('.card');
    const cardSequnce = [
        'firstCard',
        'secondCard',
        'thirdCard',
        'fourthCard',
        'fifthCard',
        'sixthCard',
    ];
    const leftButton = document.querySelector('#cardLeft');
    const rightButton = document.querySelector('#cardRight');
    const rotateCards = new RotateCards([...cards], cardSequnce);

    leftButton.addEventListener('click', () => {
        rotateCards.moveLeft();
    });

    rightButton.addEventListener('click', () => {
        rotateCards.moveRight();
    });
}

// 3. search 기능
function search() {
    alert('아직 미구현 기능입니다 ㅠ_ㅠ');
}

// 4. 매일 반복되는 일상으로 이동하는 버튼
function dailyRoom() {
    location.href='../pages/dailyRoom.html';
}

// 함수 출력
card();