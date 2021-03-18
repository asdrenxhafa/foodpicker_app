<template>
  <!-- team section -->
 <section id="team" class="parallax-section">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-2 col-md-8 col-sm-12 text-center">
				<h1 class="heading">Meet Most Rated Restaurant</h1>
				<hr>
			</div>
			<div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
				<img src="images/res1.png" class="img-responsive center-block" alt="team img">
				<h4>Sach Pizza</h4>
				<form id="rating" method="post" action-xhr="https://amp.dev/documentation/examples/interactivity-dynamic-content/star_rating/set" target="_blank">
  <fieldset class="rating">
    <input name="rating"
      type="radio"
      id="rating5"
      value="5"
      on="change:rating.submit">
    <label for="rating5"
      title="5 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating4"
      value="4"
      on="change:rating.submit">
    <label for="rating4"
      title="4 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating3"
      value="3"
      on="change:rating.submit">
    <label for="rating3"
      title="3 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating2"
      value="2"
      on="change:rating.submit"
      checked="checked">
    <label for="rating2"
      title="2 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating1"
      value="1"
      on="change:rating.submit">
    <label for="rating1"
      title="1 stars">☆</label>
  </fieldset>
</form>
  </div>

          <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<img src="images/res2.jpg" class="img-responsive center-block" alt="team img">
				<h4>French Tacos</h4>
				<form id="rating"
          method="post"
       action-xhr="https://amp.dev/documentation/examples/interactivity-dynamic-content/star_rating/set"
  target="_blank">
  <fieldset class="rating">
    <input name="rating"
      type="radio"
      id="rating5"
      value="5"
      on="change:rating.submit">
    <label for="rating5"
      title="5 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating4"
      value="4"
      on="change:rating.submit">
    <label for="rating4"
      title="4 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating3"
      value="3"
      on="change:rating.submit">
    <label for="rating3"
      title="3 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating2"
      value="2"
      on="change:rating.submit"
      checked="checked">
    <label for="rating2"
      title="2 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating1"
      value="1"
      on="change:rating.submit">
    <label for="rating1"
      title="1 stars">☆</label>
  </fieldset>
	</form>
			</div>

         <div class="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
				<img src="images/res3.jpg" class="img-responsive center-block" alt="team img">
				<h4>Mezzeria</h4>
				<form id="rating"
          method="post"
       action-xhr="https://amp.dev/documentation/examples/interactivity-dynamic-content/star_rating/set"
  target="_blank">
  <fieldset class="rating">
    <input name="rating"
      type="radio"
      id="rating5"
      value="5"
      on="change:rating.submit">
    <label for="rating5"
      title="5 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating4"
      value="4"
      on="change:rating.submit">
    <label for="rating4"
      title="4 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating3"
      value="3"
      on="change:rating.submit">
    <label for="rating3"
      title="3 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating2"
      value="2"
      on="change:rating.submit"
      checked="checked">
    <label for="rating2"
      title="2 stars">☆</label>

    <input name="rating"
      type="radio"
      id="rating1"
      value="1"
      on="change:rating.submit">
    <label for="rating1"
      title="1 stars">☆</label>
  </fieldset>
				</form>
			</div>
			</div>
		</div>
</section>


</template>

<script>
export default {
name: "RestaurantsRating"
}
</script>

<style scoped>

</style>