<script>
  import ServicePage from "/src/components/service-page.svelte";
  let description =
    "Help! I am going on vacation and I need a will. | Novel Law Group";
  let title = "Need a Will Fast | Novel Law Group";
  let url = "https://www.novel.law/services/estate/i-need-to-make-a-will-fast";
  let pTitle = "Expedited Last Will and Testament";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <!--<meta property="og:image" content="[Insert image URL]">-->
  <meta property="og:url" content={url} />
  <meta property="og:site_name" content="Novel Law Group" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <!--<meta name="twitter:image" content="[Insert image URL]">-->
  <meta name="twitter:url" content={url} />
</svelte:head>

<ServicePage title={pTitle} tagline="Giving the products that you need fast" />
<h1 class="text-center p-5">Help! I am going on vacation and I need a Will</h1>

<div class="flex md:m-20 justify-evenly gap-5">
  <div class="w-96">
    <ul>
      <li>
        <a href="/services/estate/quick-estate-generator"
          >Quick Estate Generator</a
        >
      </li>
    </ul>
  </div>
  <div>
    The Novel Law Group has you covered. We have a tool to help you out. Our <a
      href="/services/estate/quick-estate-generator">Quick Estate Generator</a
    >
    gives you the power to create a will within a hour.
    <p>
      Plus, after you are done with your vacation, contact us to complete your
      estate planning and we will give you credit towards your new estate plan.
    </p>
    <div class="p-10 bg-blue-400 text-white rounded-lg shadow-lg my-10">
      <p class="mb-3 font-bold">Here is the process Process:</p>
      <ul class="ml-5" style="list-style-type: disc;">
        <li>
          Click on the link to go to the <a
            href="/services/estate/quick-estate-generator"
            >Quick Estate Generator</a
          >
        </li>
        <li>Fill out the form</li>
        <li>One of our attorneys will review your submission</li>
        <li>
          If necessary, the attorney will call you to clarify some details
        </li>
        <li>
          After the review (within 60 minutes), you will be emailed your Last
          Will and Testament
        </li>
        <li>Print out the Will</li>
        <li>
          Sign the Will in front of two witnesses that are not beneficiaries of
          your will
        </li>
        <li>Have the witnesses sign</li>
        <li>
          After you are done with vacation, contact us to complete your estate
          plan and redeem your credit
        </li>
      </ul>
    </div>

    <div
      class="mt-5 w-96 bg-red-400 border-lg shadow-lg text-white p-10 rounded-lg text-lg"
    >
      <p class="mb-5">
        <b>WARNING:</b> By completing these steps, you will be creating a valid will.
        By executing the will, you will automatically revoke any will or amendment
        to a will that you have made previously.
      </p>
      <p class="mb-5">Executing a will can have unintended consequences.</p>
      <hr />
      If you have any concerns about whether you need to execute a new will, please
      contact us first.<br />(801) 770-0537
      <hr />
    </div>
  </div>
</div>

<style>
  h1 {
    @apply text-primary text-2xl;
  }

  a {
    @apply text-primary;
  }
</style>
