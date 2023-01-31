<script>
  import ServiceBox from "../components/service-box.svelte";
  import NLG from "/src/img/nlg.png";
</script>

<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-xl">A NOVEL APPROACH TO THE PRACTICE OF LAW</div>
</div>

<div class="py-10 md:px-80 text-center">
  <h1 class="text-primary text-5xl mb-4">SERVICES</h1>
  <div class="grid grid-cols-3">
    <ServiceBox title="Estate Planning" />
    <ServiceBox title="Business Planning" />
    <ServiceBox title="Probate" />
    <ServiceBox title="Trademarks" />
    <ServiceBox title="Copyrights" />
    <ServiceBox title="Technology Law" />
  </div>
</div>
