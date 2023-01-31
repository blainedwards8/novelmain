<script>
  import NLG from "/src/img/nlg.png";
  export let title = "";
  export let tagline = "";
</script>

<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-3xl">{title}</div>
  <div class="text-md uppercase">{tagline}</div>
</div>
