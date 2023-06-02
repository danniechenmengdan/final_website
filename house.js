(function(){
    let up = document.getElementById('GoUp')
    let down = document.getElementById('GoDown')
    let ShowImg = document.getElementById('ShowImg')
    let dc = ['76e87q.JPG','1C0A0631.JPG', '1C0A0634.JPG', '1C0A0635.JPG','1C0A0637.JPG','1C0A0638.JPG','1C0A0639.JPG','1C0A0641.JPG','1C0A0642.JPG','1C0A0643.JPG','1C0A0644.JPG','1C0A0645.JPG','1C0A0647.JPG','IMG_1320.png']
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