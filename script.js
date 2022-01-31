const slidesDiv = document.getElementById('img-slides');
let imgCount = slidesDiv.childElementCount;
let transX = 0;

function next() {
  if (transX + 400 < imgCount * 400){
    transX += 400;
    setTransform(transX);
  }
  showNavDots();
}

function previous() {
  if (transX - 400 >= 0) {
    transX -= 400;
    setTransform(transX);
  }
  showNavDots();
}

function setTransform(x) {
  slidesDiv.style.transform = `translateX(-${x}px)`
}

function showNavDots() {
  const navDotsContainer = document.getElementById('nav-dots');

  while (navDotsContainer.firstChild) {
    navDotsContainer.removeChild(navDotsContainer.firstChild);
  }

  for (i = 0; i < imgCount; i++) {
    const circle = document.createElement('div');
    circle.setAttribute('data-x', i * 400)
    circle.classList.add('small-dot');

    if (circle.getAttribute('data-x') == transX) {
      circle.classList.add('big-dot');
    }

    circle.setAttribute('onclick', `goToImg('${i * 400}')`);

    navDotsContainer.appendChild(circle);
  }
}

function goToImg(dataX) {
  transX = Number(dataX);
  setTransform(transX);
  showNavDots();
}



showNavDots();