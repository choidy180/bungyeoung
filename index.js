function select_banner(keyword){
    let banner_box = document.querySelector('.top_banner');

    // banner 박스에 keyword가 존재하지 않는 경우
    if(banner_box.classList.contains('series') === false && banner_box.classList.contains('movies') === false){
        banner_box.classList.add(keyword);
    } else {
        // keyword가 존재하는 경우

        // 선택한 keyword가 이미 존재하는 경우
        if(banner_box.classList.contains(keyword)){
            banner_box.classList.remove(keyword);
        } else {
            // 선택한 keyword가 존재하지 않는 경우
            banner_box.classList.remove('series');
            banner_box.classList.remove('movies');
            banner_box.classList.add(keyword);
        }
    }
}

function select_character(index){
    const image_box = document.querySelector('.characters-main-img');
    image_box.className = `characters-main-img character${index}`

    const text_box = document.querySelector('.characters-main-text');
    text_box.classList = `characters-main-text character${index}`
}