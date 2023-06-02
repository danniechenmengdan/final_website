(function () {
    let imgAll = document.querySelectorAll('.img_box_one')
    let imgBox = document.getElementById('center_box')
    let imgList = {
        dc:['IMG_6686.JPG', 'IMG_6684.JPG', 'IMG_6688.JPG'],
        bl:['2-3.jpg', '2.jpg', '3.jpg'],
        mirror:['IMG_6691.JPG'],
        house:['1C0A0634.JPG', '1C0A0643.JPG', '1C0A0641.JPG'],
        fk:['fk01.jpg', 'fk03.jpg', 'fk05.jpg'],
        zy:['poster.jpg','DSCF5305.JPG','DSCF5300.JPG'],
        yh : ['可视化图谱_生命银行.png']
    }
    imgAll.forEach(val => {
        let { children } = val
        if (children.length > 0) {
            val.onclick = () => {
                let clickImgID = children[0].getAttribute('id')
                imgBox.innerHTML = ""
                imgBox.innerHTML = "<h3 id='GoLink'>Enter</h3>"
                for(let i=0;i<imgList[clickImgID].length;i++){
                    let img = document.createElement('img')
                    img.src = 'picture/'+(imgList[clickImgID])[i]
                    img.classList.add("create_img")
                    imgBox.appendChild(img)
                }
                let GoLink = document.getElementById('GoLink')
                GoLink.onclick = ()=>{
                    console.log(clickImgID);
                    window.location.href = `${clickImgID}.html`
                }
            }
        }
    })
})()