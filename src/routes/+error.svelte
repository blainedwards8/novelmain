<script>
  import { page } from "$app/stores";
  let msg = ["We Object!", "This page is in recess and cannot be found"];
</script>

<div class="wrapper">
  <p class="big">{msg[0]}</p>
  <p class="semi">{msg[1]}</p>
  <p class="big">{$page.status}</p>
  <p class="mb-5">
    We apologize for this inconvenience. As a result of you receiving this
    error, those responsible will be dealt with harshly. <br />It was probably
    the lead attorney who was trying to save some money on the website by trying
    to do it himself.<br />
    He should probably stick to law and not making websites.<br />
    As compensation for you getting this page, please accept this picture of a cat.
  </p>

  <div id="img-box">
    <img
      class="m-auto"
      src="https://www.boredpanda.com/blog/wp-content/uploads/2021/02/602be3cb53c96_65fmdbh1ja951__700.jpg"
      alt="Cat Image"
    />
  </div>
</div>

<style>
  .big {
    font-size: 5rem;
  }
  .semi {
    font-size: 2rem;
  }
  .wrapper {
    margin: 40px;
    text-align: center;
  }
</style>
