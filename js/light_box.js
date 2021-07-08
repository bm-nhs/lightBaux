let bgColorImgBox = 'rgba(0,0,0,0.9)'
let allowHideScrollImgBox = 'yes'
let useFadeInoutImgBox = 'yes'
let speedImgBox = 0.08
let zIndexDvImgBox = 999
let vopaImgBox, idpopupImgBox
let gallarySelectedImage = 0

class GallaryImage {
  
  constructor (imgUrl, imgAlt, index) {
    this.imgUrl = imgUrl
    this.altText = imgAlt
    this.index = index
  }

  getImageUrl() {
    return this.imgUrl
  }

  getImageAlt() {
    return this.altText
  }

}

class GallaryImages {
  
  imageArray = []
  
  constructor() {
    this.imageArray = []
  }
  
  //addImage add galleryImage to imageArray
  addImage(galleryImage) {
    this.imageArray.push(galleryImage)
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
  let targetZoomedImage = document.createElement('div')
  let imgGal = document.createElement('div')
  let dvImages = document.createElement('div')
  imgGal.id = 'imgGal'
  targetZoomedImage.id = 'targetZoomedImage'
  dvImages.id = 'imgGalImages'
  idpopupImgBox = document.getElementById('imgGal')
  document.getElementsByTagName('body')[0].appendChild(imgGal)
  let idImgGal = document.getElementById('imgGal')
  idImgGal.appendChild(targetZoomedImage)
  idImgGal.appendChild(dvImages)
  idpopupImgBox = document.getElementById('targetZoomedImage')
  idpopupImgBox.style.top = 0
  idpopupImgBox.style.left = 0
  idpopupImgBox.style.opacity = 0
  idpopupImgBox.style.width = '100%'
  idpopupImgBox.style.height = '100%'
  idpopupImgBox.style.display = 'none'
  idpopupImgBox.style.position = 'fixed'
  idpopupImgBox.style.cursor = 'pointer'
  idpopupImgBox.style.textAlign = 'center'
  idpopupImgBox.style.zIndex = zIndexDvImgBox
  idpopupImgBox.style.backgroundColor = bgColorImgBox
  idpopupImgBox.style.color = 'white'
  idpopupImgBox.style.fontFamily = 'Arial, Helvetica, sans-serif'

}


function light_box(self, altText) {
  let namepicImgBox = typeof self === 'string' ? self : self.src
  vopaImgBox = 0
  let hwinImgBox = window.innerHeight
  let wwinImgBox = window.innerWidth
  let himgImgBox, padtopImgBox, idFadeInImgBox
  let imgImgBox = new Image()
  let text = String()
  imgImgBox.src = namepicImgBox
  imgImgBox.title = altText
  imgImgBox.onload = function () {
    himgImgBox = imgImgBox.height
    let wimgImgBox = imgImgBox.width
    let c = lBauxImages.images()
    console.log(image3)
    for (let i = 0; i < c.length; i++) {
      text += c[i].imgUrl + "<br>";
    } 
    idpopupImgBox.innerHTML = '<img src=' + namepicImgBox + '>' + '<h1>' + imgImgBox.title + '</h1>' + text

    if (wimgImgBox > wwinImgBox) {
      idpopupImgBox.getElementsByTagName('img')[0].style.width = '90%'
    } else if (himgImgBox > hwinImgBox) {
      idpopupImgBox.getElementsByTagName('img')[0].style.height = '90%'
      himgImgBox = hwinImgBox * 90 / 100
    }

    if (himgImgBox < hwinImgBox) {
      padtopImgBox = (hwinImgBox / 2) - (himgImgBox / 2)
      idpopupImgBox.style.paddingTop = padtopImgBox + 'px'
    } else {
      idpopupImgBox.style.paddingTop = '0px'
    }

    if (allowHideScrollImgBox === 'yes') {
      document.body.style.overflow = 'hidden'
    }
    idpopupImgBox.style.display = 'block'
  }

  if (useFadeInoutImgBox === 'yes') {
    idFadeInImgBox = setInterval(function () {
      if (vopaImgBox <= 1.1) {
        idpopupImgBox.style.opacity = vopaImgBox
        vopaImgBox += speedImgBox
      } else {
        idpopupImgBox.style.opacity = 1
        clearInterval(idFadeInImgBox)
      }
    }, 10)
  } else {
    idpopupImgBox.style.opacity = 1
  }

  idpopupImgBox.onclick = function () {
    if (useFadeInoutImgBox === 'yes') {
      let idFadeOutImgBox = setInterval(function () {
        if (vopaImgBox >= 0) {
          idpopupImgBox.style.opacity = vopaImgBox
          vopaImgBox -= speedImgBox
        } else {
          idpopupImgBox.style.opacity = 0
          clearInterval(idFadeOutImgBox)
          idpopupImgBox.style.display = 'none'
          idpopupImgBox.innerHTML = ''
          document.body.style.overflow = 'visible'
          vopaImgBox = 0
        }
      }, 10)
    } else {
      idpopupImgBox.style.opacity = 0
      idpopupImgBox.style.display = 'none'
      idpopupImgBox.innerHTML = ''
      document.body.style.overflow = 'visible'
    }
  }
}
