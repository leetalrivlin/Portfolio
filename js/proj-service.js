'use strict';

var gProjs;
var gProjInfo = [
  {
    id: '01',
    name: 'Give and Get',
    title: 'Give and Get Ingredients',
    desc: 'A cool and easy way to give and get ingredients',
    url: 'https://give-and-get-final-project.web.app/',
    published: 1448693940000,
    labels: ['Ingredients', 'Give', 'Get']
  },
  {
    id: '02',
    name: 'Mine Sweeper',
    title: 'My Mine Swipper',
    desc: 'The good old Mine Sweeper in a newer virsion',
    url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
    published: 1448693940555,
    labels: ['Mines', '80s', 'Game']
  },
  {
    id: '03',
    name: 'Touch Nums',
    title: 'Catch the next Number',
    desc: 'A fun game for number lovers',
    url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
    published: 1448693940556,
    labels: ['Numbers', 'Catch', 'Speed']
  },
  {
    id: '04',
    name: 'Book Shop Organizer',
    title: 'My Book Shop',
    desc: 'Helps you put some order inside your book shop',
    url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
    published: 1448693940557,
    labels: ['Books', 'Read', 'Shop']
  },
  {
    id: '05',
    name: 'In Picture',
    title: 'What is in the picture?',
    desc: 'Great game for kids to learn about animals',
    url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
    published: 1448693940558,
    labels: ['Animals', 'Read', 'Shop']
  },
  {
    id: '06',
    name: 'Pacman',
    title: 'Get ready to get addicted',
    desc: 'Remember Packman? well he is back! Go ahead and start playing',
    url: 'https://leetalrivlin.github.io/sprint_1_Leetal/',
    published: 1448693940559,
    labels: ['Packman', 'Game', 'Blast from the past']
  },
];

function createProjs() {
  var projs = [];
  for (let i = 0; i < gProjInfo.length; i++) {
    var proj = createProj(gProjInfo[i]);
    projs.push(proj);
  }
  gProjs = projs;
  return projs;
}

function createProj(projInfo) {
  var proj = {
    id: `${projInfo.id}`,
    name: `${projInfo.name}`,
    title: `${projInfo.title}`,
    imgFull: `img/portfolio/${projInfo.id}-full.jpg`,
    imgThums: `img/portfolio/${projInfo.id}-thumbnail.jpg`,
    desc: `${projInfo.desc}`,
    url: `${projInfo.url}`,
    publishedAt: `${projInfo.published}`, ////// change to normal date with a function (January 2017)
    labels: getProjLabels(projInfo.labels),
  };
  return proj;
}

function getProjLabels(labels) {
  var projLabels = [];
  var projLabel = labels.map(function (label) {
    return label;
  });
  projLabels.push(projLabel);
  return projLabels;
}
