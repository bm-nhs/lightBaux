var bgColorImgBox = 'rgba(0,0,0,0.9)'
var allowHideScrollImgBox = 'yes'
var useFadeInoutImgBox = 'yes'
var speedImgBox = 0.08
var zIndexDvImgBox = 999
var vopaImgBox, idpopupImgBox

function gallaryImage() {
    
    let imageURL = []
    let altText = []

    this.addImage = function(imgUrl, imgAlt) {
        imageURL.push(imgUrl, imgAlt)
    }

    this.imageURL = function() {
        return this.imageURL
    }

    this.altText = function() {
        return this.altText
    }
}

function gallaryImages() {
    let images = []

    this.addImage = function (gallaryImage) {
        images.push(gallaryImage)
    }

    this.returnImages = function() {
        return images
    }
}



window.onload = function () {
  var crtdvImgBox = document.createElement('div')
  var crtdvImgGal = document.createElement('div')

  crtdvImgGal.id = 'imgGal'
  crtdvImgBox.id = 'img_box'
  idpopupImgBox = document.getElementById('imgGal')
  document.getElementsByTagName('body')[0].appendChild(crtdvImgGal)
  idImgGal = document.getElementById('imgGal')
  idImgGal.appendChild(crtdvImgBox)
  idpopupImgBox = document.getElementById('img_box')
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
}


function light_box(self, altTexgt) {
  var namepicImgBox = typeof self === 'string' ? self : self.src
  vopaImgBox = 0
  var hwinImgBox = window.innerHeight
  var wwinImgBox = window.innerWidth
  var himgImgBox, padtopImgBox, idfadeinImgBox
  var imgImgBox = new Image()
  imgImgBox.src = namepicImgBox
  imgImgBox.title = altTexgt
  imgImgBox.onload = function () {
    himgImgBox = imgImgBox.height
    var wimgImgBox = imgImgBox.width
    idpopupImgBox.innerHTML = '<img src=' + namepicImgBox + '>' + '<h1>' + imgImgBox.title + '</h1>'

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
