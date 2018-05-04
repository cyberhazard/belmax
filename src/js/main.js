
const headerSlider = function(){
  if(!document.querySelector('.Header__slider_container')) return null
  var swiper = new Swiper('.Header__slider_container', {
    autoHeight: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '#desk-next',
      prevEl: '#desk-prev',
    },
    pagination: {
      el: '.Header__slider_pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
      },
    },
    breakpoints: {
      667: {
        navigation: {
          nextEl: '#mobile-next',
          prevEl: '#mobile-prev',
        },
      }
    }
  });
  swiper.navigation.nextEl
}
headerSlider();

const findLink = function(){
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++){
        arr2[i] = arr[i];
      }
        return arr2;
      } else {
        return Array.from(arr);
      }
  }
  [].concat(_toConsumableArray(document.querySelectorAll('.Menu__link'))).forEach(function (li, i, arr) {
    li.classList.remove('Menu__link_active');
    if(li.getAttribute('href') === location.pathname ) li.classList.add('Menu__link_active');
  });
}
findLink();

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
}();

[document.querySelector('.Gallery__top'),document.querySelector('.Gallery__bottom')]
  .forEach(lightGallery)

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
void function() {
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
}();

void function() {
  const select = document.querySelector('.Mob-menu__select');
  const optionsBlock = document.querySelector('.Mob-menu__select_options');
  const options = [...document.querySelectorAll('.Mob-menu__select_option')];
  const label = document.querySelector('.Mob-menu__select_label');
  const contactsLinks = [...document.querySelectorAll('.Mob-menu__link')];
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
}();

const flotSlider = function(firstSlider,secondSlider,next,prev){
  if(!document.querySelector(firstSlider)) return null
  var galleryTop = new Swiper(firstSlider, {
    slidesPerView: 1,
    initialSlide:2,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
  var galleryThumbs = new Swiper(secondSlider, {
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide:2,
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}
flotSlider('#Flot-first-top', '#Flot-first-thumb', '#Flot-first-but-next', '#Flot-first-but-prev');
flotSlider('#Flot-second-top', '#Flot-second-thumb', '#Flot-second-but-next', '#Flot-second-but-prev');
flotSlider('#Flot-third-top', '#Flot-third-thumb', '#Flot-third-but-next', '#Flot-third-but-prev');



const flotTabs = function(){
  if(!document.querySelector('.Flot__content')) return null
  const tabs = [...document.querySelectorAll('.Flot__tab')]
  const contents = [...document.querySelectorAll('.Flot__block')]
  tabs.forEach((tab,i)=>{
    tab.onclick = ({target}) =>{
      tabs.forEach(tab=>tab.classList.remove('Flot__tab_active'))
      tab.classList.add('Flot__tab_active')
      contents.forEach(el=>el.classList.remove('Flot__block_active'))
      contents[tabs.findIndex(el=>el===tab)].classList.add('Flot__block_active')
    }
  })
}()


const mobileMenu = () => {
  const hamburger = document.querySelector('.Hamburger');
  const close = document.querySelector('.Mob-menu__close');
  const menu = document.querySelector('.Mob-menu');
  const items = [...document.querySelectorAll('.Mob-menu__item')];
  items.forEach( el => el.onclick = () => menu.style.transform = '');
  hamburger.onclick = () => (menu.style.transform = 'translateX(-100%)', document.body.style.overflow='hidden')
  close.onclick = () => (menu.style.transform = '', document.body.style.overflow='')
}
mobileMenu()


const callbackPopup = () => {
  const popup = document.querySelector('.CallbackPopup');
  const triggerButton = document.querySelector('.Contacts__form_button');
  const callbackButtons = document.querySelectorAll('.About-rullon__button');
  const closeButton = document.querySelector('.CallbackPopup__close');
  const form = document.querySelector('.CallbackPopup__form');
  const checkbox = document.querySelector('.CallbackPopup__checkbox');


  const removeScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = (innerWidth - document.body.clientWidth) + 'px';
  }

  const addScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  const prevent = e => {
    e.preventDefault();
    if(!checkbox.checked){
      alert('Согласитесь с обработкой персональных данных')
    } else {
      fetch('/mail.php', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(function() {
        closePopup(), alertify.success('Ваше сообщение отправленно'), form.reset();
      })
      .catch(function (error) {
        alertify.error("Ошибка. Повторите отправку позже");
      });
    }
  }
  const openPopup = e => {
    popup.style.display = 'flex';
    removeScroll();
    window.addEventListener('keydown', listenKeys);
    setTimeout(() => popup.style.opacity = 1, 0)
  }

  const listenKeys = e => {
    if (e.keyCode === 27) {
      closePopup();
    }
  }

  const closePopup = e => {
    popup.style.opacity = '';
    popup.addEventListener('transitionend', function end() {
      form.reset();
      popup.style.display = '';
      popup.removeEventListener('transitionend', end)
      addScroll();
      window.removeEventListener('keydown', listenKeys);
    })
  }

  triggerButton.addEventListener('click', openPopup);
  callbackButtons.forEach(el=>{
    el.addEventListener('click', openPopup);
  })
  closeButton.addEventListener('click', closePopup);
  form.addEventListener('submit', prevent);

}
callbackPopup();
