<script>
  export let description = "A novel way to do law.";
  export let title = "Novel Law Group";
  export let url = "https://www.novel.law";
  export let type = "article";
  export let site_name = "Novel Law Group, PLLC";
  export let img = "https://novelmain.blaineedwards.repl.co/src/img/nlg.png";
</script>

<svelte:head>
<title>{title}</title>
<meta name="description" content={description}>
<meta property="og:title" content={title}>
<meta property="og:url" content={url}>
<meta property="og:type" content={type}>
<meta property="og:image" content={img}>
<meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->
<meta property="og:description" content={description}>
<meta property="og:site_name" content={site_name}>
<meta name="twitter:image:alt" content="Novel Law Group">

<!--  Non-Essential, But Required for Analytics -->
<meta property="fb:app_id" content="novellawgroup" />
<meta name="twitter:site" content="@blainedwards8">
</svelte:head>