//<header id="header" class="header-container">
// <span class="header-arrow inactive">&lt;</span>
//   <h1 class="header-title">PlatziMovies</h1>
//   <h1 class="header-title header-title--categoryView inactive">Acción</h1>
//</header>/


//Sections
const headerSection = document.querySelector('#header');
const trendingPreviewSection = document.querySelector('#trendingPreview');
const categoriesPreviewSection = document.querySelector('#categoriesPreview')
const genericSection = document.querySelector("#genericList");
const movieDetailSection = document.querySelector('#movieDetail');

//Lists & Containers
const searchForm = document.querySelector('#searchForm')
const trendingMoviesPreviewList = document.querySelector('.trendingPreview-movieList')
const categoriesPreviewList = document.querySelector('.categoriesPreview-list')
const movieDetailCategoriesList = document.querySelector('#movieDetail .categoriesList')
const relatedMoviesContainer = document.querySelector('.relatedMovies-scrollContainer')

//Elements
const headerTitle = document.querySelector(".header-title")
const arrowBtn = document.querySelector('.header-arrow');
const headerCategoryTitle = document.querySelector('.header-title--categoryView');

const searchFormInput = document.querySelector('#searchForm input');
const searchFormBtn = document.querySelector('#searchBtn');

const trendingBtn = document.querySelector('.trendingPreview-btn');

const movieDetailTitle = document.querySelector('.movieDetail-title');
const movieDetailDescription = document.querySelector('.movieDetail-description');
const movieDetailScore = document.querySelector('.movieDetail-score');
