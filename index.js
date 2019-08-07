'use strict';

let breed;

function getImages() {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
        .then(response => response.json())
        .then(responseJson => showResults(responseJson))
        .catch(error => alert('Oops, Something is fishy. Try again later.'));
}

function showResults(responseJson) {
    console.log(responseJson.message);
    $('.dog-image-container').append(`<img src="${responseJson.message}" class="results-img">`);
    $('.dog-image-container').removeClass('hidden');
}

function formListener() {
    $('form').submit(event => {
        event.preventDefault();
        breed = $('#new-dogs-entry').val();
        getImages();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    formListener();
});