class CardItem extends HTMLElement {

    set ValueMovie(values) {
        this.__ValueMovie = values;
        this.render();
    }

    render() {
        if (this.__ValueMovie == false) {
            this.innerHTML = `               
            <div class="col-md-12 result">
               <p class="text-center fw-bold">Film Tidak ditemukan</p>
            </div>                                
        `
        } else {
            this.__ValueMovie.map(rs => {
                this.innerHTML += `               
                    <div class="col-md-4 result">
                        <div class="card my-4">
                            <img src="${rs.Poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${rs.Title}</h5>
                                <p class="card-text">Tahun : ${rs.Year}</p>
                                <a href="#" class="btn btn-primary">Lihat Detail</a>
                            </div>
                        </div>
                    </div>                                
                `
            })

        }

    }

}

customElements.define('card-item', CardItem);