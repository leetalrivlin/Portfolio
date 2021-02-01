'use strict';

$(document).ready(initPage);

function initPage() {
  console.log('Starting up');
  gProjs = createProjs();
  renderProjs();
  renderProjModal();
}

function renderProjs() {
  var projs = gProjs;
  var strHTML = projs
    .map(function (proj) {
      return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
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
                </div>`;
    })
    .join('');
  $('.single-thumbnail').html(strHTML);
}

function renderProjModal() {
  var projs = gProjs;
  var strHTML = projs
    .map(function (proj) {
      return `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                        <h2>${proj.name}</h2>
                                <p class="item-intro text-muted">${proj.title}</p>
                                <img class="img-fluid d-block mx-auto" src="${proj.imgFull}" alt="${proj.labels}">
                                <p>${proj.desc}</p>
                                <a href="${proj.url}" target="_blank">
                                <button class="open-link-btn btn btn-dark m-4 w-25" type="button">
                                    <i class="fa fa-eye"></i>
                                     Check it out!</button>
                                     </a>
                                <ul class="list-inline">
                                <li>Date: ${proj.publishedAt}</li>
                                <li>Client: Threads</li>
                                <li>Category: Web Development</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                    <i class="fa fa-times"></i>
                                    Close Project</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>`;
    })
    .join('');
  $('.container-modal').html(strHTML);
}
