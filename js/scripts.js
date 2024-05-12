WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Our clubs
	const ourClubsSliders = [],
		ourClubs = document.querySelectorAll('.our_clubs .swiper')

	ourClubs.forEach((el, i) => {
		el.classList.add('our_clubs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			slidesPerView: 'auto',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 30
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.club')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.club')

					items.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		ourClubsSliders.push(new Swiper('.our_clubs_s' + i, options))
	})


	// Community
	const communitySliders = [],
		community = document.querySelectorAll('.community .swiper')

	community.forEach((el, i) => {
		el.classList.add('community_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			slidesPerView: 'auto',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 30
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		communitySliders.push(new Swiper('.community_s' + i, options))
	})


	// Our arenas slider
	const ourArenasSliders = [],
		ourArenas = document.querySelectorAll('.our_arenas .swiper')

	ourArenas.forEach((el, i) => {
		el.classList.add('our_arenas_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			slidesPerView: 'auto',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				768: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 30
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		ourArenasSliders.push(new Swiper('.our_arenas_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Mob. menu
	$('.fixed_panel .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.fixed_panel .mob_menu_btn').toggleClass('active')
		$('body').addClass('menu_open')
		$('.fixed_panel .menu').toggleClass('show')

		$('.fixed_panel .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(200)
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Init map
function initMap() {
	ymaps.ready(() => {
		let myMap = new ymaps.Map('map', {
			center: [55.755864, 37.617698],
			zoom: 10,
			controls: []
		})


		// Marker 1
		let myPlacemark = new ymaps.Placemark([55.785782, 37.441329], {
			balloonContent  : String() +
				'<div class="item">' +
					'<div class="time">' +
						'<span>Круглосуточно</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_time"></use></svg>' +
					'</div>' +

					'<div class="thumb">' +
						'<img src="images/tmp/map_item_thumb.png" alt="" loading="lazy">' +

						'<div class="info">' +
							'<div class="name">АБАКАН</div>' +

							'<div class="links">' +
								'<div class="path">' +
									'<a href="/">' +
										'<span>Как добраться</span>' +
										'<svg class="icon"><use xlink:href="images/sprite.svg#ic_path"></use></svg>' +
									'</a>' +
								'</div>' +

								'<div class="link">' +
									'<a href="/">Узнать о клубе больше</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<button class="book_btn">' +
						'<span>Забронировать ПК</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arrow_link"></use></svg>' +
					'</button>' +
				'</div>'
		}, {
			iconLayout : 'default#image',
			iconImageHref : 'images/map_marker_violet.svg',
			iconImageSize : [61, 76],
			iconImageOffset : [-31, -38],
			hideIconOnBalloonOpen : false,
			balloonShadow : false,
			balloonOffset : [0, 88]
		})

		myMap.geoObjects.add(myPlacemark)


		// Marker 2
		let myPlacemark2 = new ymaps.Placemark([55.711176, 37.683521], {
			balloonContent  : String() +
				'<div class="item">' +
					'<div class="time">' +
						'<span>Круглосуточно</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_time"></use></svg>' +
					'</div>' +

					'<div class="thumb">' +
						'<img src="images/tmp/map_item_thumb.png" alt="" loading="lazy">' +

						'<div class="info">' +
							'<div class="name">АБАКАН</div>' +

							'<div class="links">' +
								'<div class="path">' +
									'<a href="/">' +
										'<span>Как добраться</span>' +
										'<svg class="icon"><use xlink:href="images/sprite.svg#ic_path"></use></svg>' +
									'</a>' +
								'</div>' +

								'<div class="link">' +
									'<a href="/">Узнать о клубе больше</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<button class="book_btn">' +
						'<span>Забронировать ПК</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arrow_link"></use></svg>' +
					'</button>' +
				'</div>'
		}, {
			iconLayout : 'default#image',
			iconImageHref : 'images/map_marker_green.svg',
			iconImageSize : [61, 77],
			iconImageOffset : [-31, -38],
			hideIconOnBalloonOpen : false,
			balloonShadow : false,
			balloonOffset : [0, 88]
		})

		myMap.geoObjects.add(myPlacemark2)


		myMap.behaviors.disable('scrollZoom')
	})
}



// Init big map
function initBigMap() {
	ymaps.ready(() => {
		let myMap = new ymaps.Map('map', {
			center: [55.755864, 37.617698],
			zoom: 10,
			controls: []
		})


		// Marker 1
		let myPlacemark = new ymaps.Placemark([55.785782, 37.441329], {
			balloonContent  : String() +
				'<div class="item">' +
					'<div class="time">' +
						'<span>Круглосуточно</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_time"></use></svg>' +
					'</div>' +

					'<div class="thumb">' +
						'<img src="images/tmp/map_item_thumb.png" alt="" loading="lazy">' +

						'<div class="info">' +
							'<div class="name">АБАКАН</div>' +

							'<div class="links">' +
								'<div class="path">' +
									'<a href="/">' +
										'<span>Как добраться</span>' +
										'<svg class="icon"><use xlink:href="images/sprite.svg#ic_path"></use></svg>' +
									'</a>' +
								'</div>' +

								'<div class="link">' +
									'<a href="/">Узнать о клубе больше</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<button class="book_btn">' +
						'<span>Забронировать ПК</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arrow_link"></use></svg>' +
					'</button>' +
				'</div>'
		}, {
			iconLayout : 'default#image',
			iconImageHref : 'images/map_marker_violet.svg',
			iconImageSize : [61, 76],
			iconImageOffset : [-31, -38],
			hideIconOnBalloonOpen : false,
			balloonShadow : false,
			balloonOffset : [0, 88]
		})

		myMap.geoObjects.add(myPlacemark)


		// Marker 2
		let myPlacemark2 = new ymaps.Placemark([55.711176, 37.683521], {
			balloonContent  : String() +
				'<div class="item">' +
					'<div class="time">' +
						'<span>Круглосуточно</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_time"></use></svg>' +
					'</div>' +

					'<div class="thumb">' +
						'<img src="images/tmp/map_item_thumb.png" alt="" loading="lazy">' +

						'<div class="info">' +
							'<div class="name">АБАКАН</div>' +

							'<div class="links">' +
								'<div class="path">' +
									'<a href="/">' +
										'<span>Как добраться</span>' +
										'<svg class="icon"><use xlink:href="images/sprite.svg#ic_path"></use></svg>' +
									'</a>' +
								'</div>' +

								'<div class="link">' +
									'<a href="/">Узнать о клубе больше</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<button class="book_btn">' +
						'<span>Забронировать ПК</span>' +
						'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arrow_link"></use></svg>' +
					'</button>' +
				'</div>'
		}, {
			iconLayout : 'default#image',
			iconImageHref : 'images/map_marker_green.svg',
			iconImageSize : [61, 77],
			iconImageOffset : [-31, -38],
			hideIconOnBalloonOpen : false,
			balloonShadow : false,
			balloonOffset : [0, 88]
		})

		myMap.geoObjects.add(myPlacemark2)


		myMap.behaviors.disable('scrollZoom')
	})
}