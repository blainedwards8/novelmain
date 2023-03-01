<script>
  //import ServiceBox from "../components/service-box.svelte";
  import NLG from "/src/img/nlg.png";
  import Header from "../../components/header.svelte";
</script>

<svelte:head>
  <title>Novel Law Group - Contact Us</title>
  <meta
    name="description"
    content="Contact the Novel Law Group for a free consultation."
  />
  <meta property="og:title" content="Novel Law Group - Contact Us" />
  <meta
    property="og:description"
    content="Contact the Novel Law Group for a free consultation."
  />
  <meta property="og:image" content="https://www.novel.law/img/nlg.png" />
  <meta property="og:url" content="https://www.novel.law/" />
  <meta property="og:site_name" content="Novel Law Group" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Novel Law Group - Contact Us" />
  <meta
    name="twitter:description"
    content="Contact the Novel Law Group for a free consultation."
  />
  <meta name="twitter:image" content="https://www.novel.law/img/nlg.png" />
  <meta name="twitter:site" content="@novellawgroup" />
  <meta name="twitter:creator" content="@novellawgroup" />
</svelte:head>

<Header
  title="Contact the Novel Law Group"
  description="Contact the Novel Law Group"
/>

<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-xl">CONTACT US</div>
</div>

<div>
  <div class="row justify-content-center">
    <iframe
      class="mt-5"
      src="https://www.cognitoforms.com/f/jZvVcdUYtESC246IXY5uOA/8"
      style="border:0;width:100%;"
      height="513"
    />
  </div>
</div>
