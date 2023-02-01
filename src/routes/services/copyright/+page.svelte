<script>
  import ServicePage from "/src/components/service-page.svelte";
</script>

<ServicePage title="Copyrights" tagline="A novel approach to copyright" />

<div class="flex">
  <div class="md:px-20 mt-5">
    <ul>
      <li><a href="#copyright">What are copyrights?</a></li>
      <li>
        <a href="#served"
          >Help! I received a complaint for Copyright infringment.</a
        >
      </li>

      <li>
        <a href="#protect"
          >What can I do if someone if infringing my copyright?</a
        >
      </li>

      <li>
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
  </div>
  <div class="md:px-20">
    <h1 id="copyright">Copyright?</h1>
    <p>
      Copyright laws exist to protect the rights of authors, artists, and other
      creators of content. Without copyrights, anyone could use or reproduce
      works of authorship without permission or compensation. This would be
      unfair to the creators, who would be unable to make a living from their
      work.
    </p>
    <p>
      Copyright law ensures that creators are rewarded for their work and can
      benefit financially from it. It also encourages creativity by allowing
      creators to be compensated for their work and incentivizing them to create
      more.
    </p>
    <p>
      Copyright law also helps protect the integrity of the work. Without
      copyright, anyone could make changes to the work and claim it as their
      own. This would be detrimental to the original author or artist, who would
      be unable to protect their work from alteration or misuse.
    </p>
    <p>
      Copyright also helps to ensure that works are available to the public.
      Without copyright, creators may be unwilling to make their work available,
      as they would be unable to prevent its widespread distribution and
      potential misuse. Copyright laws ensure that authors and creators have
      control over how their work is used and distributed, which protects the
      public's access to their works.
    </p>
    <p>
      In sum, copyright laws are important to protect authors, artists, and
      other creators from exploitation and misuse of their work. Copyright laws
      also provide incentives for creators to create and make their works
      available to the public. Copyright laws are essential to ensuring that
      creators are compensated for their work, and that the integrity of their
      work is preserved.
    </p>
    <h1 id="served">Help! I received a complaint for Copyright infringment</h1>
    <p>
      Being sued for copyright infringement can be a scary and confusing
      experience. At our law firm, we understand the gravity of the situation,
      and are committed to providing you with the best possible legal advice and
      representation.
    </p>
    <p>
      We will help you navigate the legal process, and provide you with the
      resources and advice needed to make informed decisions about your case.
      Our team of experienced lawyers will review the circumstances of your case
      and develop a strategy to protect your rights.
    </p>
    <p>
      We understand that copyright infringement cases can be complex and
      intimidating, and we will strive to make sure your questions are answered
      and your concerns are addressed. Our attorneys are available to meet with
      you in person or by phone, or by email to discuss your case.
    </p>
    <p>
      We take pride in providing the highest quality legal services, and our
      goal is to ensure that your rights and interests are protected throughout
      the process. If you have been sued for copyright infringement, contact us
      today to speak with one of our experienced lawyers.
    </p>
    <h1 id="protect">
      What can I do if someone is infringing on my Copyright?
    </h1>
    <p>
      If you have reason to believe that your copyright has been infringed, you
      should contact our law firm immediately. Our attorneys have extensive
      experience in all aspects of copyright law and can help you protect your
      rights.
    </p>
    <p>
      We will carefully review your case and determine the best course of action
      to take. Depending on the nature of the infringement, we can help you seek
      damages, obtain an injunction against the infringer, or negotiate a
      settlement.
    </p>
    <p>
      Our attorneys will help you navigate the complex copyright landscape,
      explain your legal options, and provide you with the highest quality legal
      representation. We understand how important it is to protect your
      intellectual property and will work tirelessly to ensure that your rights
      are upheld.
    </p>
    <p>
      If you would like to speak with one of our attorneys about a copyright
      infringement matter, please contact us. We look forward to speaking with
      you and helping you protect your rights.
    </p>
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
    @apply uppercase text-2xl text-center mt-5;
  }
  p {
    @apply mt-4;
  }

  ul {
    @apply bg-primary rounded p-5 shadow-lg;
  }
  li {
    @apply mb-5 text-white font-bold;
  }
</style>
