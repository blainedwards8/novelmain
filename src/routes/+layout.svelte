<script>
  import "../app.css";
  import {
    FacebookBrand,
    TwitterBrand,
    LinkedinInBrand,
  } from "svelte-awesome-icons";
</script>

<svelte:head>
  <title>Novel Law Group</title>
  <meta name="description" content="A Novel way to do law.">
  <meta property="og:title" content="Novel Law Group">
  <meta property="og:url" content="https://www.novel.law">
  <meta property="og:type" content="">
  <meta property="og:image" content="https://novelmain.blaineedwards.repl.co/src/img/nlg.png">
  <meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->
<meta property="og:description" content="A Novel way to do law.">
<meta property="og:site_name" content="Novel Law Group, PLLC">
<meta name="twitter:image:alt" content="Novel Law Group">

<!--  Non-Essential, But Required for Analytics -->
<meta property="fb:app_id" content="your_app_id" />
<meta name="twitter:site" content="@blainedwards8">
</svelte:head>

<div class="wrapper font-serif">
  <div>
    <nav class="flex justify-between bg-secondary p-5 text-white">
      <div>
        <h1 class="text-lg"><a href="/">Novel Law Group</a></h1>
      </div>

      <ul class="flex gap-5">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="min-h-screen">
    <slot />
  </div>

  <div
    class="footer bg-secondary grid lg:grid-cols-3 grid-cols-1 justify-items-center px-60 py-10 text-white md:text-xl text-center"
  >
    <div class="mb-5">
      <h2 class="uppercase sm:text-3xl">Location</h2>
      <div class="mt-5">
        668 E 12225 S, Suite 204<br />
        Draper, UT 84020 Phone: <br />(801) 770-0537
      </div>
    </div>

    <div class="mb-5">
      <h2 class="uppercase sm:text-3xl">AROUND THE WEB</h2>
      <div class="mt-5 flex justify-center gap-5">
        <div><a href="https://www.facebook.com/novellawgroup"><FacebookBrand /></a></div>
        <div><a href="https://twitter.com/blainedwards8"><TwitterBrand /></a></div>
        <div><a href="https://www.linkedin.com/company/novel-law-group/"><LinkedinInBrand /></a></div>
      </div>
    </div>

    <div class="mb-5">
      <h2 class="uppercase sm:text-3xl">ABOUT NOVEL LAW</h2>
      <div class="mt-5">
        A law firm that uses a novel approach to the practice of law.
      </div>
    </div>
  </div>
</div>

<style>
</style>
