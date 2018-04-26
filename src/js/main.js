
const flotTabs = function(){
  if(!document.querySelector('.Flot__content')) return null
  const tabs = [...document.querySelectorAll('.Flot__tab')]
  const contents = [...document.querySelectorAll('.Flot__block')]
  tabs.forEach((tab,i)=>{
    tab.onclick = ({target}) =>{
      tabs.forEach(tab=>tab.classList.remove('Flot__tab_active'))
      target.classList.add('Flot__tab_active')
      contents.forEach(el=>el.classList.remove('Flot__block_active'))
      contents[tabs.findIndex(el=>el===target)].classList.add('Flot__block_active')
    }
  })
}()

const contactsTabs = function(){
  if(!document.querySelector('.Contacts')) return null
  const tabs = [...document.querySelectorAll('.Contacts__tab')]
  const contents = [...document.querySelectorAll('.Contacts__content')]
  tabs.forEach((tab,i)=>{
    tab.onclick = ({target}) =>{
      tabs.forEach(tab=>tab.classList.remove('Contacts__tab_active'))
      tab.classList.add('Contacts__tab_active')
      contents.forEach(el=>el.classList.remove('Contacts__content_active'))
      contents[tabs.findIndex(el=>el===tab)].classList.add('Contacts__content_active')
    }
  })
}()

const flotSlider = function(slider,thumb){
  var galleryTop = new Swiper(slider, {
    slidesPerView: 1,
    initialSlide:1,
    navigation: {
      nextEl: '.Flot__slider_button_next',
      prevEl: '.Flot__slider_button_prev',
    },
  });
  var galleryThumbs = new Swiper(thumb, {
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide:1,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}
flotSlider('#Flot-first-top','#Flot-first-thumb');
// flotSlider('#Flot-second-top','#Flot-second-thumb')
// flotSlider('#Flot-third-top','#Flot-third-thumb')

[document.querySelector('.Gallery__top'),document.querySelector('.Gallery__bottom')]
  .forEach(lightGallery)

void function() {
  const data = {
    'Санкт-Петербург': {
      email: 'mail@asda.com',
      phone: '+7 964 850 49 35',
      address: 'Пресненская наб. д.6 стр. 2, офис 123'
    },
    'Москва': {
      email: 'val2@asda.com',
      phone: '+7 964 850 49 35',
      address: 'Преval3я наб. д.6 стр. 2, офис 123'
    },
    'Антверпен': {
      email: 'val3@asda.com',
      phone: '+7 964 850 49 35',
      address: 'Прval3ая наб. д.6 стр. 2, офис 123'
    },
  }
  const select = document.querySelector('.Select');
  const optionsBlock = document.querySelector('.Select__options');
  const options = [...document.querySelectorAll('.Select__option')];
  const label = document.querySelector('.Select__label');
  const contactsLinks = [...document.querySelectorAll('.Address__link')];
  select.addEventListener('click', () => select.classList.toggle('active'));
  select.addEventListener('blur', () => select.classList.remove('active'));
  options.forEach(option => option.onclick = e => {
    label.textContent = e.target.textContent;
    select.dispatchEvent(new CustomEvent('change', {detail: { value: e.target.textContent }}))
  });
  select.addEventListener('change', (e) => {
    contactsLinks[0].textContent = data[e.detail.value].email
    contactsLinks[1].textContent = data[e.detail.value].phone
    contactsLinks[2].textContent = data[e.detail.value].address
  })
}()
