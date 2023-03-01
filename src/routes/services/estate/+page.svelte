<script>
  import ServicePage from "/src/components/service-page.svelte";
  let description =
    "Our estate planning services provide peace of mind for you and your loved ones. Our experts will help you plan and organize your assets, minimize taxes, and ensure that your wishes are respected. Contact us today for a consultation.";
  let pTitle = "Novel Law Group - A Novel Approach to Estate Plan";
</script>

<svelte:head>
  <title>{pTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content="A Novel Way to Estate Plan | Law Firm" />
  <meta property="og:description" content={description} />
  <!--<meta property="og:image" content="[Insert image URL]">-->
  <meta property="og:url" content="https://www.novel.law/estate" />
  <meta property="og:site_name" content={pTitle} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pTitle} />
  <meta name="twitter:description" content={description} />
  <!--<meta name="twitter:image" content="[Insert image URL]">-->
  <meta name="twitter:url" content="https://www.novel.law/estate" />
</svelte:head>

<ServicePage
  title="Estate Planning"
  tagline="A novel approach to estate planning"
/>

<div class="flex">
  <div class="md:px-20 mt-5">
    <ul class="side">
      <li><a href="#whatis">What is Estate Planning?</a></li>
      <li><a href="#difference">How Novel Law is Different</a></li>
      <li>
        <a href="#contactus">Contact Us</a>
      </li>
    </ul>
  </div>

  <div class="md:px-20" id="whatis">
    <p class="mt-5">
      Estate planning is the process of preparing for the management and
      distribution of your assets after your death. It involves deciding how you
      want your property and possessions to be distributed, and choosing the
      right people to carry out your wishes. While estate planning is often
      associated with the wealthy, it is important for everyone to have a plan
      in place to ensure that their assets are distributed according to their
      wishes and to minimize taxes and other expenses.
    </p>
    <p>
      There are several key components to consider when creating an estate plan.
      First, you will need to decide how you want your assets to be distributed.
      This can be done through a will, trust, or other legal document. You will
      also need to choose an executor or personal representative to manage the
      distribution of your assets.
    </p>
    <p>
      Next, you will need to consider your end-of-life wishes. This includes
      deciding on medical treatment, such as whether you want to be placed on
      life support or undergo certain medical procedures. You can also specify
      your preferences for funeral and burial arrangements.
    </p>
    <p>
      In addition to these important decisions, estate planning also involves
      planning for potential financial and legal issues. For example, you may
      want to consider creating a power of attorney to designate someone to
      manage your financial affairs if you become incapacitated. You may also
      want to consider setting up a guardianship for minor children or
      dependents.
    </p>
    <p>
      Estate planning can be a complex process, and it is important to work with
      a qualified attorney to ensure that your plan is properly executed. An
      attorney can help you understand your options and make informed decisions
      about your estate. They can also help you navigate the legal process and
      ensure that your wishes are carried out according to your desires.
    </p>
    <p>
      Overall, estate planning is an important step that everyone should take to
      ensure that their assets are distributed according to their wishes and to
      protect their loved ones. With careful planning and the guidance of a
      qualified attorney, you can create a comprehensive estate plan that meets
      your needs and goals.
    </p>
    <p>
      At Novel Law, we take Estate Planning to the next level through the use of
      automation. This simplifies the estate planning process, while decreasing
      fees. We pass these fee savings on to you. Although we use automation, you
      will get the estate plan that you need. Every client will meet with an
      attorney that will incoporate your unique needs. We know that no two
      estates are the same.
    </p>
    <p>
      You will get additional advantages by completing your estate plan with the
      Novel Law Group, which include:
    </p>
    <h3>How is Novel Law Different?</h3>
    <ul class="content">
      <li>
        Continue asking questions about your estate plan at no additional charge
        (our relationship doesn't end when you sign the documents). Chances are
        you will have a life event happen at some time. We can provide
        additional advice on how those events will effect your estate plan. If
        needed, we can help you make revisions.
      </li>
      <li>
        We store your documents on our client portal, to which you will have
        access. Keep important documents safe on our portal. You can even sign a
        disclosure giving us the ability to release the documents to others as
        needed.
      </li>
      <li>
        You get an estate planning packet that includes a questionnaire that you
        can fill out detailing information about your finances, insurance,
        utilities, properties, and much more. This is beneficial for any person
        who will be a personal represtative, hold a power of attorney, or
        trustee. This takes the guess work out of trying to piece everything
        together.
      </li>
      <li>
        We follow up with you annually by email or through the client portal to
        make sure your needs are being met with your estate plan.
      </li>
    </ul>
  </div>
</div>
<hr />
<div id="contactus" />

<h5 class="text-center text-uppercase text-secondary mb-0">
  Ready to get more infomration about estate planning?
</h5>
<p class="text-center">
  Fill out the form below to get more information about the estate planning
  process with the Novel Law Group.
</p>
<iframe
  class="mt-5"
  src="https://www.cognitoforms.com/f/jZvVcdUYtESC246IXY5uOA/7"
  style="border:0;width:100%;"
  height="717"
/>

<style>
  p {
    @apply p-2;
  }

  h1 {
    @apply uppercase text-2xl text-center mt-5;
  }
  p {
    @apply mt-4;
  }

  ul.content {
    @apply ml-5;
  }

  ul.content li {
    @apply mb-5;
    list-style-type: disc;
  }

  ul.side {
    @apply bg-primary rounded p-5 shadow-lg;
  }
  ul.side li {
    @apply mb-5 text-white font-bold;
  }

  h3 {
  }
</style>
