(function(){
    let up = document.getElementById('GoUp')
    let down = document.getElementById('GoDown')
    let ShowImg = document.getElementById('ShowImg')
    let dc = ['桌游-01.jpg','桌游-02.jpg','poster.jpg','DSCF5314.JPG','DSCF5300.JPG']
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