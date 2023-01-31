<script>
  import "../app.css";
  import {
    FacebookBrand,
    TwitterBrand,
    LinkedinInBrand,
  } from "svelte-awesome-icons";
</script>

<div class="wrapper font-serif">
  <div>
    <nav class="flex justify-between bg-secondary p-5 text-white">
      <div>
        <h1 class="text-lg"><a href="/">Novel Law Group</a></h1>
      </div>

      <ul class="flex gap-5">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="min-h-screen">
    <slot />
  </div>

  <div
    class="footer bg-secondary grid grid-cols-3 justify-items-center px-60 py-10 text-white text-xl text-center"
  >
    <div>
      <h2 class="uppercase text-3xl">Location</h2>
      <div class="mt-5">
        668 E 12225 S, Suite 204<br />
        Draper, UT 84020 Phone: <br />(801) 770-0537
      </div>
    </div>

    <div>
      <h2 class="uppercase text-3xl">AROUND THE WEB</h2>
      <div class="mt-5 flex justify-center gap-5">
        <div><a href="https://www.facebook.com"><FacebookBrand /></a></div>
        <div><a href="https://www.twitter.com"><TwitterBrand /></a></div>
        <div><a href="https://www.linkedin.com"><LinkedinInBrand /></a></div>
      </div>
    </div>

    <div>
      <h2 class="uppercase text-3xl">ABOUT NOVEL LAW</h2>
      <div class="mt-5">
        A law firm that uses a novel approach to the practice of law.
      </div>
    </div>
  </div>
</div>

<style>
</style>
