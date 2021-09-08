class SlideInstagramClone {

    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }

    init() {
        this.items = this.slide.querySelectorAll('.slide-items > img');
        this.thumb = document.querySelector('.slide-thumb');
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.addClick();
        this.addThumb();
        this.activeSlide(this.active);
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach((thumb) => thumb.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    addClick() {
        const prevEl = document.querySelector('.slide-prev');
        const nextEl = document.querySelector('.slide-next');

        prevEl.addEventListener('click', this.prev);
        nextEl.addEventListener('click', this.next);
    }

    addThumb() {
        this.items.forEach(() => this.thumb.innerHTML += `<span></span>`);
        this.thumbItems = Array.from(this.thumb.children);
        console.log(this.thumbItems);
    }

    autoSlide() {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(this.next, 5000);
    }
}

new SlideInstagramClone('slide')