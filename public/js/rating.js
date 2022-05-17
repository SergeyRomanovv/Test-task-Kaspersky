const ratings = document.querySelectorAll('.rating');

function initRatings() {
  let ratingActive;
  let ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = 0;
  }

  function setRatingActiveWidth(index = ratingValue) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item');
    for (let counter = 0; counter < ratingItems.length; counter++) {
      const ratingItem = ratingItems[counter];
      ratingItem.addEventListener('mouseenter', (event) => {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('click', (event) => {
        initRatingVars(rating);

        setRatingValue(ratingItem.value, rating);
      });
    }
  }

  function setRatingValue(value, rating) {
    if (!rating.classList.contains('rating-sending')) {
      rating.classList.add('rating-sending');

      const response = {
        newRating: 4.5,
        status: 200,
      };

      if (response.status === 200) {
        setRatingActiveWidth(response.newRating);
      } else {
        console.error('Ошибка');
        rating.classList.remove('rating-sending');
      }
    }
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }
}

if (ratings.length > 0) {
  initRatings();
}
