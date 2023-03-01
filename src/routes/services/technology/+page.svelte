<script>
  import ServicePage from "/src/components/service-page.svelte";
  let pTitle = "Novel Law Group - Advising in the new age of Technology Law";
  let pDescription =
    "Providing legal advise and services in the new age of technology. Our services include advising in intellectual property, data privacy, and blockchain technologies.";
</script>

<svelte:head>
  <title>{pTitle}</title>
  <meta name="description" content={pDescription} />
  <meta property="og:title" content={pTitle} />
  <meta property="og:description" content={pDescription} />
  <meta property="og:image" content="https://www.novel.law/img/nlg.png" />
  <meta property="og:url" content="https://www.novel.law/" />
  <meta property="og:site_name" content="Novel Law Group" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pTitle} />
  <meta name="twitter:description" content={pDescription} />
  <meta name="twitter:image" content="https://www.novel.law/img/nlg.png" />
  <meta name="twitter:site" content="@novellawgroup" />
  <meta name="twitter:creator" content="@novellawgroup" />
</svelte:head>

<ServicePage
  title="Novel Law Group"
  tagline="We are built on novel technology"
/>

<div />
