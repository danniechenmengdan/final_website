(function(){
    let up = document.getElementById('GoUp')
    let down = document.getElementById('GoDown')
    let ShowImg = document.getElementById('ShowImg')
    let dc = ['IMG_6688.JPG','IMG_6689.JPG', '门票.JPG', '贴纸最终.JPG','IMG_6904.JPG','IMG_6687.JPG','IMG_6684.JPG','IMG_6686.JPG','IMG_6685.JPG','IMG_6905.JPG','IMG_6906.JPG']
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