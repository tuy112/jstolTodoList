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
