(function () {
    let imgAll = document.querySelectorAll('.img_box_one')
    let imgBox = document.getElementById('center_box')
    let imgList = {
        dc: ['big-2.jpg'],
        bl: ['big-1.jpg'],
        mirror: ['big-3.jpg'],
        house: ['big-4.jpg'],
        fk: ['big-5.jpg'],
        zy: ['big-6.jpg'],
        yh: ['big-7.jpg']
    }

    imgAll.forEach(val => {
        let { children } = val
        if (children.length > 0) {
            val.onclick = () => {
                let clickImgID = children[0].getAttribute('id')
                imgBox.innerHTML = ""
                imgBox.innerHTML = "<h3 id='GoLink'>ENTER</h3>"
                for (let i = 0; i < imgList[clickImgID].length; i++) {
                    let img = document.createElement('img')
                    img.src = 'picture/' + (imgList[clickImgID])[i]
                    img.classList.add("create_img")
                    imgBox.appendChild(img)
                }
                let GoLink = document.getElementById('GoLink')
                GoLink.onclick = () => {
                    console.log(clickImgID);
                    window.location.href = `${clickImgID}.html`
                }
            }
        }
    })
})()