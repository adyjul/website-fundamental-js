class CarouselItem extends HTMLElement {
    set ValueMovie(values) {
        this.__ValueMovie = values;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="carousel-item active">
            <img src="${this.__ValueMovie.res.Poster}" class="d-block w-100 ${this.__ValueMovie.i == 0 ? 'active' : '' }" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${this.__ValueMovie.res.Title}</h5>           
            </div>
        </div>   
        `

    }

}

customElements.define('carousel-item', CarouselItem);