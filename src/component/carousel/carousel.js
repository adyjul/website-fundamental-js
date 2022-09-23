import './carousel-item';

class Carousel extends HTMLElement {
    set ValueMovie(values) {
        this.__ValueMovie = values;
        this.render();
    }



    render() {
        this.__ValueMovie.map((res, i) => {
            const carouselItemElement = document.createElement('carousel-item');
            carouselItemElement.ValueMovie = { res, i };
            this.appendChild(carouselItemElement);
        });
    }
}

customElements.define('carousel-list', Carousel);