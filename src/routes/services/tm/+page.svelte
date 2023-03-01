<script>
  import ServicePage from "/src/components/service-page.svelte";
  let pTitle =
    "Novel Law Group - A Novel Way to Protect your brands with Trademarks";
  let description = "A novel approach to trademarks";
</script>

<svelte:head>
  <title>{pTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={pTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="https://www.novel.law/img/nlg.png" />
  <meta property="og:url" content="https://www.novel.law/" />
  <meta property="og:site_name" content="Novel Law Group" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://www.novel.law/img/nlg.png" />
  <meta name="twitter:site" content="@novellawgroup" />
  <meta name="twitter:creator" content="@novellawgroup" />
</svelte:head>

<ServicePage title="Trademarks" tagline="A novel approach to trademarks" />

<p>
  A trademark is an important asset that businesses use to protect their brands
  and products from being copied by others. At our site, we make the process of
  registering trademarks simple and secure.
</p>

<p>
  A trademark is a unique sign or expression that helps to distinguish a
  company’s goods or services from those of other businesses. It can be a logo,
  a phrase, a slogan, a word, a design, a sound, a combination of colors, and
  more. When a company registers a trademark, they are claiming exclusive rights
  to that sign or expression. This helps to protect their products and services
  from being copied by others and allows them to pursue legal action against
  those who do.
</p>

<p>
  At our site, we provide a simple and secure way to register trademarks. Our
  experts will guide you through the registration process and make sure that you
  understand each step. We also provide ongoing support to help you protect your
  trademark.
</p>

<p>
  We understand how important trademarks are to businesses, which is why we make
  it our mission to provide the best service possible. With our help, you can
  rest assured that your trademark is safe and secure.
</p>

<iframe
  class="my-5"
  src="https://www.cognitoforms.com/f/jZvVcdUYtESC246IXY5uOA/10"
  style="border:0;width:100%;"
  height="513"
/>

<style>
  p {
    @apply px-60;
    @apply mt-4;
  }
</style>
