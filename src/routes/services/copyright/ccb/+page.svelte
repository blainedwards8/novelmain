  <script>
    import ServicePage from "/src/components/service-page.svelte";
  </script>
  
  <svelte:head>
    <title>Copyright Claims Board</title>
    <meta name="description" content="Our law firm specializes in copyrights, offering comprehensive legal services to protect your creative work. From filing copyright applications to litigating copyright infringement cases, we have the experience and knowledge to help you.">
    <meta property="og:title" content="Copyright Claims Board | CCB">
    <meta property="og:description" content="Learn more about the Copyright Claims Board.">
    <!--<meta property="og:image" content="[Insert image URL]">-->
    <meta property="og:url" content="https://www.novel.law/services/copyright/ccb">
    <meta property="og:site_name" content="Law Firm">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Copyright Claims Board | CCB">
    <meta name="twitter:description" content="Learn more about the Copyright Claims Board.">
    <!--<meta name="twitter:image" content="[Insert image URL]">-->
    <meta name="twitter:url" content="https://www.novel.law/services/copyright/ccb">
  
  
  
  
  </svelte:head>
  
  <ServicePage title="Copyright Claims Board" tagline="A novel approach to copyright" />
  <div class="flex">
    <div class="md:px-20 mt-5">
      <ul class="side">
        <li>
          <a href="#ccb"
            >Copyright Claims Board</a
          >
        </li>
        <li>
          <a href="claims">What types of cases can the CCB hear?</a>
        </li>
        <li><a href="limitations">What are the limits of the CCB?</a></li>

      </ul>
    </div>
    <div class="md:px-20">
      <h1 id="copyright">Copyright Claims Board</h1>
      <div>
        The Copyright Claims Board (CCB) was created as an alterntaive to filing claims in district court.
      </div>

      <h1 id="claims">
        What types of claims can the CCB hear?
      </h1>
      <div>
        The Copyright Claims Board can hear cases that involve:
        <ul class="mcontent">
          <li><a href="/services/copyright/infringement">Infringement</a></li>
          <li>Non-Infringement</li>
          <li>DCMA Misrepresentation Cases</li>
        </ul>
      </div>

      <h1>What are the limits of the CCB?</h1>
      <div>
        It is important to note that the CCB cannot do everything that the district court can do. In fact there are significant differences
        that a claimant should consider before deciding to use the CCB to place a claim. As noted above, the CCB can only hear cases for
        infringement, non-infringement, and DMCA misrepresentation. 
      </div>
      <h3>Limits on Monetary Damages</h3>
      <div>
        Because the CCB is meant to be the small claims court of copyright cases, the amount in damages are limited. Specifically, the total
        amount the CCB can award is $30,000. However, if seeking statutory damages in statutory cases is $15,000 per work. Additionally, the
        CCB does not make a determination about wilfull infringement -- thus capping any additonal damages that would be available.
      </div>

      <div>
        The CCB generally does not award attorney fees.
      </div>

      <h3>Injunctive Relief</h3>
      <div>
        The CCB does not have the power to stop an infringer from infringing on you work. If you want to seek injunctive relief, you must do
        so through federal district court.
      </div>
    </div>
  </div>
  
  <div class="row justify-content-center" id="contact">
    <iframe
      class="my-5"
      src="https://www.cognitoforms.com/f/jZvVcdUYtESC246IXY5uOA/8"
      style="border:0;width:100%;"
      height="513"
    />
  </div>
  
  <style>
    h1 {
      @apply uppercase text-2xl mt-5;
      padding-top:20px;
    }
    p {
      @apply mt-4;
    }

    ul.mcontent {
      color:black;
    }

    ul.mcontent li {
      list-style: disc;
      padding-left: 10px;
      margin-left: 30px;
    }

    ul.side {
      @apply bg-primary rounded p-5 shadow-lg;
    }
    ul.side li {
      @apply mb-5 text-white font-bold;
    }

    h3{ 
      font-size:15px;
      font-weight:bold;
      padding-top:10px;
    }
    div {
      padding-bottom:10px;
    }
  </style>
  