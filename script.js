let div = document.createElement('div')
div.className = 'container-content'

// ---------------------- creating HTML element --------------------------

div.innerHTML = `
<section>
<div class="head">
    <h1>GET RANDOM FOODS RECIPES API</h1>
</div>
</section>

<div class="search-box">
<div><button type="button" onclick="get()">👉 Get Random Food 👈</button></div>
<div class="yt"></div>
</div>

<div class="response-content">
<div class="img-food-info">
    <div class="food-img"></div>
    <div class="food-titles">
        <h2 class="food-name"></h2>
            <p class="food-style"></p>
            <p class="food-cat"></p>
    </div>
</div>
<div class="ingre-and-measure">
<div class="ingredients">
    <div class="ingredients-title"></div>

    <p class="ingredient1"></p>
    <p class="ingredient2"></p>
    <p class="ingredient3"></p>
    <p class="ingredient4"></p>
    <p class="ingredient5"></p>
    <p class="ingredient6"></p>
    <p class="ingredient7"></p>
    <p class="ingredient8"></p>
    <p class="ingredient9"></p>
    <p class="ingredient10"></p>
    <p class="ingredient11"></p>
    <p class="ingredient12"></p>
    <p class="ingredient13"></p>
    <p class="ingredient14"></p>
    <p class="ingredient15"></p>
    <p class="ingredient16"></p>
    <p class="ingredient17"></p>
    <p class="ingredient18"></p>
    <p class="ingredient19"></p>
    <p class="ingredient20"></p>
</div>
<div class="measures">
<div class="measures-title"></div>

    <p class="measure1"></p>
    <p class="measure2"></p>
    <p class="measure3"></p>
    <p class="measure4"></p>
    <p class="measure5"></p>
    <p class="measure6"></p>
    <p class="measure7"></p>
    <p class="measure8"></p>
    <p class="measure9"></p>
    <p class="measure10"></p>
    <p class="measure11"></p>
    <p class="measure12"></p>
    <p class="measure13"></p>
    <p class="measure14"></p>
    <p class="measure15"></p>
    <p class="measure16"></p>
    <p class="measure17"></p>
    <p class="measure18"></p>
    <p class="measure19"></p>
    <p class="measure20"></p>
</div>
</div>
</div>
<div class="instructions">
<div class="instruct"></div>
<p class="instru"></p>
</div>
`
document.body.prepend(div)

// -------------------- fetch data using async & await function ----------------------

async function get() {
  let req = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  let reqq = await req.json()

  // --------------------------- img & img details function --------------------------

  let image = reqq.meals.map((n) => n.strMealThumb).reduce((a, b) => a + b)
  document.querySelector(
    '.food-img'
  ).innerHTML = `<img src="${image}" alt="food-img" width="400" height="400">`

  let foodName = reqq.meals.map((n) => n.strMeal).reduce((a, b) => a + b)
  document.querySelector('.food-name').innerText = `${foodName}`

  let foodStyle = reqq.meals.map((n) => n.strArea).reduce((a, b) => a + b)
  document.querySelector('.food-style').innerText = `${foodStyle}`

  let foodCat = reqq.meals.map((n) => n.strCategory).reduce((a, b) => a + b)
  document.querySelector('.food-cat').innerText = `${foodCat}`

  // -------------------------- ingredients function ----------------------------

  let ingredient1 = reqq.meals
    .map((n) => n.strIngredient1)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient1').innerText = `${ingredient1}`

  let ingredient2 = reqq.meals
    .map((n) => n.strIngredient2)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient2').innerText = `${ingredient2}`

  let ingredient3 = reqq.meals
    .map((n) => n.strIngredient3)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient3').innerText = `${ingredient3}`

  let ingredient4 = reqq.meals
    .map((n) => n.strIngredient4)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient4').innerText = `${ingredient4}`

  let ingredient5 = reqq.meals
    .map((n) => n.strIngredient5)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient5').innerText = `${ingredient5}`

  let ingredient6 = reqq.meals
    .map((n) => n.strIngredient6)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient6').innerText = `${ingredient6}`

  let ingredient7 = reqq.meals
    .map((n) => n.strIngredient7)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient7').innerText = `${ingredient7}`

  let ingredient8 = reqq.meals
    .map((n) => n.strIngredient8)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient8').innerText = `${ingredient8}`

  let ingredient9 = reqq.meals
    .map((n) => n.strIngredient9)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient9').innerText = `${ingredient9}`

  let ingredient10 = reqq.meals
    .map((n) => n.strIngredient10)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient10').innerText = `${ingredient10}`

  let ingredient11 = reqq.meals
    .map((n) => n.strIngredient11)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient11').innerText = `${ingredient11}`

  let ingredient12 = reqq.meals
    .map((n) => n.strIngredient12)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient12').innerText = `${ingredient12}`

  let ingredient13 = reqq.meals
    .map((n) => n.strIngredient13)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient13').innerText = `${ingredient13}`

  let ingredient14 = reqq.meals
    .map((n) => n.strIngredient14)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient14').innerText = `${ingredient14}`

  let ingredient15 = reqq.meals
    .map((n) => n.strIngredient15)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient15').innerText = `${ingredient15}`

  let ingredient16 = reqq.meals
    .map((n) => n.strIngredient16)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient16').innerText = `${ingredient16}`

  let ingredient17 = reqq.meals
    .map((n) => n.strIngredient17)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient17').innerText = `${ingredient17}`

  let ingredient18 = reqq.meals
    .map((n) => n.strIngredient18)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient18').innerText = `${ingredient18}`

  let ingredient19 = reqq.meals
    .map((n) => n.strIngredient19)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient19').innerText = `${ingredient19}`

  let ingredient20 = reqq.meals
    .map((n) => n.strIngredient20)
    .reduce((a, b) => a + b)
  document.querySelector('.ingredient20').innerText = `${ingredient20}`

  // -------------------------- measures function ----------------------------

  let measure1 = reqq.meals.map((n) => n.strMeasure1).reduce((a, b) => a + b)
  document.querySelector('.measure1').innerText = `${measure1}`

  let measure2 = reqq.meals.map((n) => n.strMeasure2).reduce((a, b) => a + b)
  document.querySelector('.measure2').innerText = `${measure2}`

  let measure3 = reqq.meals.map((n) => n.strMeasure3).reduce((a, b) => a + b)
  document.querySelector('.measure3').innerText = `${measure3}`

  let measure4 = reqq.meals.map((n) => n.strMeasure4).reduce((a, b) => a + b)
  document.querySelector('.measure4').innerText = `${measure4}`

  let measure5 = reqq.meals.map((n) => n.strMeasure5).reduce((a, b) => a + b)
  document.querySelector('.measure5').innerText = `${measure5}`

  let measure6 = reqq.meals.map((n) => n.strMeasure6).reduce((a, b) => a + b)
  document.querySelector('.measure6').innerText = `${measure6}`

  let measure7 = reqq.meals.map((n) => n.strMeasure7).reduce((a, b) => a + b)
  document.querySelector('.measure7').innerText = `${measure7}`

  let measure8 = reqq.meals.map((n) => n.strMeasure8).reduce((a, b) => a + b)
  document.querySelector('.measure8').innerText = `${measure8}`

  let measure9 = reqq.meals.map((n) => n.strMeasure9).reduce((a, b) => a + b)
  document.querySelector('.measure9').innerText = `${measure9}`

  let measure10 = reqq.meals.map((n) => n.strMeasure10).reduce((a, b) => a + b)
  document.querySelector('.measure10').innerText = `${measure10}`

  let measure11 = reqq.meals.map((n) => n.strMeasure11).reduce((a, b) => a + b)
  document.querySelector('.measure11').innerText = `${measure11}`

  let measure12 = reqq.meals.map((n) => n.strMeasure12).reduce((a, b) => a + b)
  document.querySelector('.measure12').innerText = `${measure12}`

  let measure13 = reqq.meals.map((n) => n.strMeasure13).reduce((a, b) => a + b)
  document.querySelector('.measure13').innerText = `${measure13}`

  let measure14 = reqq.meals.map((n) => n.strMeasure14).reduce((a, b) => a + b)
  document.querySelector('.measure14').innerText = `${measure14}`

  let measure15 = reqq.meals.map((n) => n.strMeasure15).reduce((a, b) => a + b)
  document.querySelector('.measure15').innerText = `${measure15}`

  let measure16 = reqq.meals.map((n) => n.strMeasure16).reduce((a, b) => a + b)
  document.querySelector('.measure16').innerText = `${measure16}`

  let measure17 = reqq.meals.map((n) => n.strMeasure17).reduce((a, b) => a + b)
  document.querySelector('.measure17').innerText = `${measure17}`

  let measure18 = reqq.meals.map((n) => n.strMeasure18).reduce((a, b) => a + b)
  document.querySelector('.measure18').innerText = `${measure18}`

  let measure19 = reqq.meals.map((n) => n.strMeasure19).reduce((a, b) => a + b)
  document.querySelector('.measure19').innerText = `${measure19}`

  let measure20 = reqq.meals.map((n) => n.strMeasure20).reduce((a, b) => a + b)
  document.querySelector('.measure20').innerText = `${measure20}`

  // -------------------------- instructions function ----------------------------

  let instru = reqq.meals.map((n) => n.strInstructions).reduce((a, b) => a + b)
  document.querySelector('.instru').innerText = `${instru}`

  // -------------------------- youtube btn function ----------------------------

  let youtube = reqq.meals.map((n) => n.strYoutube).reduce((a, b) => a + b)
  document.querySelector(
    '.yt'
  ).innerHTML = `<a href="${youtube}" class="watch-vid"><i class="fa-brands fa-youtube"></i> Watch</a>`

  document.querySelector(
    '.ingredients-title'
  ).innerHTML = `<h2>Ingredients</h2>`

  document.querySelector('.measures-title').innerHTML = `<h2>Measures</h2>`

  document.querySelector('.instruct').innerHTML = `<h3>Instructions:</h3>`
}
