(function(){
    let up = document.getElementById('GoUp')
    let down = document.getElementById('GoDown')
    let ShowImg = document.getElementById('ShowImg')
    let dc = ['1.JPG','2-3.jpg', '2.JPG', '3.JPG','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','6-7.jpg','广告墙.jpg']
    let clickI = 0
    up.onclick = ()=>{
        ShowImg.src = 'picture/'+dc[clickI]
        if(clickI <= 0){
            clickI = dc.length-1
        }else{
            clickI --
        }
    }
    down.onclick = ()=>{
        console.log('---')
        ShowImg.src = 'picture/'+dc[clickI]
        if(clickI == dc.length-1){
            clickI = 0
        }else{
            clickI ++
        }
    }
    let GoBack = document.getElementById('GoBack')
    GoBack.onclick=()=>{
        window.history.go(-1)
    }
})()