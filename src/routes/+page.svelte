<script>
  import ServiceBox from "../components/service-box.svelte";
  import NLG from "/src/img/nlg.png";
  import Header from "../components/header.svelte";
</script>

<svelte:head>
  <title
    >The Novel Law Group - Expert Legal Services - A Novel Approach to the
    Practice of Law</title
  >
  <meta
    name="description"
    content="The Novel Law Group is a boutique law firm that provides expert legal services to individuals and businesses. We are a team of attorneys, paralegals, and legal assistants who are passionate about the law and helping our clients."
  />
  <meta
    property="og:title"
    content="The Novel Law Group - Expert Legal Services - A Novel Approach to the Practice of Law"
  />
  <meta
    property="og:description"
    content="The Novel Law Group is a boutique law firm that provides expert legal services to individuals and businesses. We are a team of attorneys, paralegals, and legal assistants who are passionate about the law and helping our clients."
  />
  <meta property="og:image" content="https://www.novel.law/img/nlg.png" />
  <meta property="og:url" content="https://www.novel.law/" />
  <meta property="og:site_name" content="Novel Law Group" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:title"
    content="The Novel Law Group - Expert Legal Services - A Novel Approach to the Practice of Law"
  />
  <meta
    name="twitter:description"
    content="The Novel Law Group is a boutique law firm that provides expert legal services to individuals and businesses. We are a team of attorneys, paralegals, and legal assistants who are passionate about the law and helping our clients."
  />
  <meta name="twitter:image" content="https://www.novel.law/img/nlg.png" />
  <meta name="twitter:site" content="@novellawgroup" />
  <meta name="twitter:creator" content="@novellawgroup" />
</svelte:head>

<Header />

<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-xl">A NOVEL APPROACH TO THE PRACTICE OF LAW</div>
</div>

<div class="py-10 md:px-40 text-center">
  <h1 class="text-primary text-5xl mb-4">SERVICES</h1>
  <div class="grid md:grid-cols-3 sm:grid-cols-1">
    <ServiceBox title="Trademarks" url="/services/tm" />
    <ServiceBox title="Copyrights" url="/services/copyright" />
    <ServiceBox title="Technology Law" url="/services/technology" />
  </div>

  <h2 class="text-lg text-secondary">Interested in Learning More</h2>
  <div class="text-3xl text-secondary uppercase">
    <a href="/contact">Contact Us</a>
  </div>
</div>
