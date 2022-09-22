class Carousel extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://m.media-amazon.com/images/M/MV5BN2QwMzIxN2UtMWVlNS00NjJmLWI4ZTMtM2U4NTdhZTRiMDE1XkEyXkFqcGdeQXVyNjYxNDc5MzU@._V1_SX300.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="vis
        `
    }
}