let bgColorImgBox = 'rgba(0,0,0,0.9)'
let allowHideScrollImgBox = 'yes'
let useFadeInoutImgBox = 'yes'
let speedImgBox = 0.08
let zIndexDvImgBox = 999
let vopaImgBox, idTargetZoomedImage, idImgGal, idImgGalImages, targetZoomedImage, imgGalImages
let gallarySelectedImage = 0


let arrowImages = "" +
    "        <svg version=\"1.1\" id=\"galNavArrowLeft\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    "             x=\"0px\" y=\"0px\" width=\"10%\" height=\"10%\"\n" +
    "             viewBox=\"0 0 410.258 410.258\" style=\"enable-background:new 0 0 410.258 410.258;\" xml:space=\"preserve\">\n" +
    "            <polygon style=\"fill:#b2ff24;\" points=\"298.052,24 266.052,0 112.206,205.129 266.052,410.258 298.052,386.258 162.206,205.129 \"/>\n" +
    "        </svg>\n" +
    "        <svg version=\"1.1\" id=\"galNavArrowRight\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    "             x=\"0px\" y=\"0px\" width=\"10%\" height=\"10%\"" +
    "             viewBox=\"0 0 414.496 414.496\" style=\"enable-background:new 0 0 414.496 414.496;\" xml:space=\"preserve\">\n" +
    "            <polygon style=\"fill:#b2ff24;\" points=\"118.126,0 89.796,28.238 268.223,207.248 89.796,386.258 118.126,414.496 324.7,207.248 \"/>\n" +
    "        </svg>"


class GallaryImage {
  
  constructor (imgUrl, imgAlt, index) {
    this.imgUrl = imgUrl
    this.altText = imgAlt
    this.index = index
  }

}

class GallaryImages {
  
  imageArray = new Array()
  
  constructor() {
    this.imageArray = []
  }
  
  //addImage add GallaryImage to imageArray
  addImage(gallaryImage) {
    this.imageArray.push(gallaryImage)
  }

  images() {
    return this.imageArray
  }
}

let lBauxImages = new GallaryImages()
let image1 = new GallaryImage('https://i.picsum.photos/id/738/400/300.jpg?hmac=UVdKENBe3SgSVhGIl7yPz_ckfEOpymYEzF7NGCQjTlk', 'alt1')
let image2 = new GallaryImage('https://i.picsum.photos/id/1003/400/300.jpg?hmac=ZZl-tJjPBSVtmWTzID6Mm2yqxh373qCf69n6IACLILw', 'alt2')
let image3 = new GallaryImage('https://i.picsum.photos/id/716/400/300.jpg?hmac=0hSLXA6AjmF4lFIkds8ei7lK_EJoDU8QNPFFM1V9P9A', 'alt3')
let image4 = new GallaryImage('https://i.picsum.photos/id/995/400/300.jpg?hmac=laYxVwsygK90NIJN-koAiPWnCONLTcmRSomzWhSQ_Fg', 'alt4')
let image5 = new GallaryImage('https://i.picsum.photos/id/179/400/300.jpg?hmac=YgRvJy_ZR83p-Ue1IA150Tiz85Z0tSW7d8PydgIdo9Q', 'alt5')
let image6 = new GallaryImage('https://i.picsum.photos/id/1013/400/300.jpg?hmac=lRgL2ctx0e-z0OUjnOcIMF4xuTuxwWYlfIajUkp4m3A', 'alt6')

lBauxImages.addImage(image1)
lBauxImages.addImage(image2)
lBauxImages.addImage(image3)
lBauxImages.addImage(image4)
lBauxImages.addImage(image5)
lBauxImages.addImage(image6)


window.onload = function () {
  let imgGal = document.createElement('div')
  targetZoomedImage = document.createElement('div')
  imgGalImages = document.createElement('div')
  imgGal.id = 'imgGal'
  targetZoomedImage.id = 'targetZoomedImage'
  imgGalImages.id = 'imgGalImages'
  document.getElementsByTagName('body')[0].appendChild(imgGal)

  idImgGalImages = document.getElementById('imgGalImages')

  idImgGal = document.getElementById('imgGal')

  idImgGal.style.top = 0
  idImgGal.style.left = 0
  idImgGal.style.opacity = 0
  idImgGal.style.width = '100%'
  idImgGal.style.height = '100%'
  idImgGal.style.display = 'none'
  idImgGal.style.position = 'fixed'
  idImgGal.style.cursor = 'pointer'
  idImgGal.style.textAlign = 'center'
  idImgGal.style.zIndex = zIndexDvImgBox
  idImgGal.style.backgroundColor = bgColorImgBox
  idImgGal.style.color = 'white'
  idImgGal.style.fontFamily = 'Arial, Helvetica, sans-serif'
  idImgGal.style.visibility = 'visible'

}


function light_box(self, altText) {
  let namepicImgBox = typeof self === 'string' ? self : self.src
  vopaImgBox = 0
  let hwinImgBox = window.innerHeight
  let wwinImgBox = window.innerWidth
  let himgImgBox, padtopImgBox, idfadeinImgBox
  let imgImgBox = new Image()
  let text = String()

  idTargetZoomedImage = document.getElementById('targetZoomedImage')
  idImgGal.innerHTML = arrowImages
  idImgGal.appendChild(targetZoomedImage)
  idImgGal.appendChild(imgGalImages)
  imgImgBox.src = namepicImgBox
  imgImgBox.title = altText
  imgImgBox.onload = function () {

    himgImgBox = imgImgBox.height
    let wimgImgBox = imgImgBox.width
    c = lBauxImages.images()
    for (let i = 0; i < c.length; i++) {
      text += c[i].imgUrl + "<br>";
    }

    //idImgGal.innerHTML = '<img src=' + namepicImgBox + '>' + '<h1>' + imgImgBox.title + '</h1>' + text

    if (wimgImgBox > wwinImgBox) {
      idImgGal.getElementsByTagName('img')[0].style.width = '90%'
    } else if (himgImgBox > hwinImgBox) {
      idImgGal.getElementsByTagName('img')[0].style.height = '90%'
      himgImgBox = hwinImgBox * 90 / 100
    }

    if (himgImgBox < hwinImgBox) {
      padtopImgBox = (hwinImgBox / 2) - (himgImgBox / 2)
      idImgGal.style.paddingTop = padtopImgBox + 'px'
    } else {
      idImgGal.style.paddingTop = '0px'
    }

    if (allowHideScrollImgBox === 'yes') {
      document.body.style.overflow = 'hidden'
    }
    idImgGal.style.display = 'block'
  }

  if (useFadeInoutImgBox === 'yes') {
    idfadeinImgBox = setInterval(function () {
      if (vopaImgBox <= 1.1) {
        idImgGal.style.opacity = vopaImgBox
        vopaImgBox += speedImgBox
      } else {
        idImgGal.style.opacity = 1
        clearInterval(idfadeinImgBox)
      }
    }, 10)
  } else {
    idImgGal.style.opacity = 1
  }

  idTargetZoomedImage.onclick = function () {
    if (useFadeInoutImgBox === 'yes') {
      let idfadeoutImgBox = setInterval(function () {
        if (vopaImgBox >= 0) {
          idImgGal.style.opacity = vopaImgBox
          vopaImgBox -= speedImgBox
        } else {
          idImgGal.style.opacity = 0
          clearInterval(idfadeoutImgBox)
          idImgGal.style.display = 'none'
          idImgGal.innerHTML = ''
          document.body.style.overflow = 'visible'
          vopaImgBox = 0
        }
      }, 10)
    } else {
      idImgGal.style.opacity = 0
      idImgGal.style.display = 'none'
      idImgGal.innerHTML = ''
      document.body.style.overflow = 'visible'
    }
  }
}
