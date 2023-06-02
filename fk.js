(function(){
    let up = document.getElementById('GoUp')
    let down = document.getElementById('GoDown')
    let ShowImg = document.getElementById('ShowImg')
    let dc = ['fk01.jpg','fk02.jpg', 'fk03.jpg', 'fk04.jpg','fk05.jpg','fk06.jpg']
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