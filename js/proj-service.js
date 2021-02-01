'use strict';

var gProjs;
var gProjInfo = [
    {
        id: 'give-and-get',
        name: 'Give and Get',
        title: 'Give and Get Ingredients',
        imgFull: 'img/portfolio/01-full.jpg',
        imgThums: 'img/portfolio/01-thumbnail.jpg',
        desc: 'cool and easy way to give and get ingredients',
        url: 'https://give-and-get-final-project.web.app/',
        published: 1448693940000,
        labels: ['Ingredients', 'Give', 'Get']
    },
    {
        id: 'mine-swipper',
        name: 'Mine Sweeper',
        title: 'My Mine Swipper',
        imgFull: 'img/portfolio/02-full.jpg',
        imgThums: 'img/portfolio/02-thumbnail.jpg',
        desc: 'The good old Mine Sweeper in a newer virsion',
        url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
        published: 1448693940555,
        labels: ['Mines', '80\'s', 'Game']
    }  
];

function createProjs() {
  var projs = [];
  for (let i = 0; i < gProjInfo.length; i++) {
    var proj = createProj(gProjInfo[i]);
    projs.push(proj);
  }
  console.log('projs',projs);
  gProjs = projs;
  return projs;
}

function createProj(projInfo) {
  var proj = {
    id: `${projInfo.id}`,
    name: `${projInfo.name}`,
    title: `${projInfo.title}`,
    imgFull: `${projInfo.imgFull}`,
    imgThums: `${projInfo.imgThums}`,
    desc: `${projInfo.desc}`,
    url: `projs/${projInfo.url}`,
    publishedAt: `${projInfo.published}`,
    labels: [...`${projInfo.labels}`],
  };
  console.log('proj',proj);
  return proj;
}
