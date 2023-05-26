(function(){
    let imgAll = document.querySelectorAll('.img_box_one')
    let imgBox = document.getElementById('center_box')
    // let dc = ['tupianyi','tupianer']
    // let bl = ['']
    imgAll.forEach(val=>{
        let {children} = val
        if(children.length>0){
            val.onmouseenter = ()=>{
                let showImg = document.getElementById('showImg')
                imgBox.style.display = "block"
                console.log(children[0].src);
                showImg.src = children[0].src
            }
        }
    })
    imgBox.onclick = function(){
        console.log(123);
    }
})()