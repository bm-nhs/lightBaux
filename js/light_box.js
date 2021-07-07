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
    return this.imageURL
  }

  getImageAlt() {
    return this.altText
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

var lBauxImages = new GallaryImages()
var image1 = new GallaryImage('https://i.picsum.photos/id/738/400/300.jpg?hmac=UVdKENBe3SgSVhGIl7yPz_ckfEOpymYEzF7NGCQjTlk', 'alt1')
var image2 = new GallaryImage('https://i.picsum.photos/id/1003/400/300.jpg?hmac=ZZl-tJjPBSVtmWTzID6Mm2yqxh373qCf69n6IACLILw', 'alt2')
var image3 = new GallaryImage('https://i.picsum.photos/id/716/400/300.jpg?hmac=0hSLXA6AjmF4lFIkds8ei7lK_EJoDU8QNPFFM1V9P9A', 'alt3')
var image4 = new GallaryImage('https://i.picsum.photos/id/995/400/300.jpg?hmac=laYxVwsygK90NIJN-koAiPWnCONLTcmRSomzWhSQ_Fg', 'alt4')
var image5 = new GallaryImage('https://i.picsum.photos/id/179/400/300.jpg?hmac=YgRvJy_ZR83p-Ue1IA150Tiz85Z0tSW7d8PydgIdo9Q', 'alt5')
var image6 = new GallaryImage('https://i.picsum.photos/id/1013/400/300.jpg?hmac=lRgL2ctx0e-z0OUjnOcIMF4xuTuxwWYlfIajUkp4m3A', 'alt6')

lBauxImages.addImage(image1)
lBauxImages.addImage(image2)
lBauxImages.addImage(image3)
lBauxImages.addImage(image4)
lBauxImages.addImage(image5)
lBauxImages.addImage(image6)


window.onload = function () {
  var targetZoomedImage = document.createElement('div')
  var imgGal = document.createElement('div')
  var dvImages = document.createElement('div')
  imgGal.id = 'imgGal'
  targetZoomedImage.id = 'targetZoomedImage'
  dvImages.id = 'imgGalImages'
  idpopupImgBox = document.getElementById('imgGal')
  document.getElementsByTagName('body')[0].appendChild(imgGal)
  idImgGal = document.getElementById('imgGal')
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
  var namepicImgBox = typeof self === 'string' ? self : self.src
  vopaImgBox = 0
  var hwinImgBox = window.innerHeight
  var wwinImgBox = window.innerWidth
  var himgImgBox, padtopImgBox, idfadeinImgBox
  var imgImgBox = new Image()
  var text = String()
  imgImgBox.src = namepicImgBox
  imgImgBox.title = altText
  imgImgBox.onload = function () {
    himgImgBox = imgImgBox.height
    var wimgImgBox = imgImgBox.width
    c = lBauxImages.images()
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
    idfadeinImgBox = setInterval(function () {
      if (vopaImgBox <= 1.1) {
        idpopupImgBox.style.opacity = vopaImgBox
        vopaImgBox += speedImgBox
      } else {
        idpopupImgBox.style.opacity = 1
        clearInterval(idfadeinImgBox)
      }
    }, 10)
  } else {
    idpopupImgBox.style.opacity = 1
  }

  idpopupImgBox.onclick = function () {
    if (useFadeInoutImgBox === 'yes') {
      var idfadeoutImgBox = setInterval(function () {
        if (vopaImgBox >= 0) {
          idpopupImgBox.style.opacity = vopaImgBox
          vopaImgBox -= speedImgBox
        } else {
          idpopupImgBox.style.opacity = 0
          clearInterval(idfadeoutImgBox)
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
