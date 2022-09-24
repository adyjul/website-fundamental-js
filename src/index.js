import { getData } from './method/method';
import { urlSearchById, urlSearchByName } from './config/config';
import $, {get } from 'jquery';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import 'bootstrap';
import './component/carousel/carousel';
import './component/card/card-item';

const loader = {
    show() {
        $('.loading').css('display', 'block');
    },
    hide() {
        let loading = $('.loading')
        loading.css('display', 'none')
    }
};
const dataMovie = async() => {
    var urlCarousel = urlSearchByName('adventure');
    let result = await getData(urlCarousel);
    return result.Search;
}

let getBySearch = async(value) => {
    try {
        var url = urlSearchByName(value);
        let result = await getData(url);
        return result.Search;
    } catch (err) {
        swal({
            title: "Film tidak ditemukan",
            text: "Mohon cari sesuai nama film",
            icon: "error",
            button: "oke",
        });
        return false
    }
}

let resultData = await dataMovie();
const carouselElement = document.createElement('carousel-list');
const cardElement = document.createElement('card-item');
carouselElement.ValueMovie = resultData;

$(document).on('submit', '#form-search', async function(e) {
    e.preventDefault();

    var dataInput = new FormData($(this)[0]);
    loader.show();
    $('.result').children().remove();
    let resultMovie = await getBySearch(dataInput.get('cari'))
    loader.hide();
    cardElement.ValueMovie = resultMovie;
})


$('.carousel-inner').append(carouselElement);

$('.result-movie-search').append(cardElement);
$('card-item').addClass('row');