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

// 2. ERP 공부방


// 3. search 기능
function search() {
    alert('아직 미구현 기능입니다 ㅠ_ㅠ');
}

// 4. 매일 반복되는 일상으로 이동하는 버튼
function dailyRoom() {
    location.href='../pages/dailyRoom.html';
}