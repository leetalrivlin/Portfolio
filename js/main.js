'use strict';

$(document).ready(initPage);

function initPage() {
    console.log('Starting up');
    gProjs = createProjs();
    renderProjs();
}

function renderProjs() {
    var projs = gProjs;
    var strHTML = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img class="img-fluid" src="${proj.imgThums}" alt="${proj.labels}">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>`
    }).join('');
    $('.single-thumbnail').html(strHTML);
}