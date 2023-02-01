<script>
  import ServiceBox from "../components/service-box.svelte";
  import NLG from "/src/img/nlg.png";
  import Header from "../components/header.svelte";
</script>

<Header></Header>


<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-xl">A NOVEL APPROACH TO THE PRACTICE OF LAW</div>
</div>

<div class="py-10 md:px-40 text-center">
  <h1 class="text-primary text-5xl mb-4">SERVICES</h1>
  <div class="grid md:grid-cols-3 sm:grid-cols-1">
    <ServiceBox title="Estate Planning" url="/services/estate" />
    <ServiceBox title="Business Planning" url="/services/business" />
    <ServiceBox title="Probate" url="/services/probate" />
    <ServiceBox title="Trademarks" url="/services/tm" />
    <ServiceBox title="Copyrights" url="/services/copyright" />
    <ServiceBox title="Technology Law" url="/services/technology" />
  </div>

  <h2 class="text-lg text-secondary">Interested in Learning More</h2>
  <div class="text-3xl text-secondary uppercase">
    <a href="/contact">Contact Us</a>
  </div>
</div>
