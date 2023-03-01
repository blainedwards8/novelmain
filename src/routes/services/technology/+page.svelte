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

<h2>Technology Law Services</h2>
<p>Our technology law services include:</p>

<ul>
  <li>
    <strong>Intellectual Property:</strong> We can help you protect your intellectual
    property, including trademarks, patents, and copyrights. Our services include
    conducting searches, filing applications, and enforcing your rights.
  </li>

  <li>
    <strong>Privacy Law:</strong> We can assist you with complying with data privacy
    laws and regulations, drafting privacy policies, and handling data breaches.
  </li>

  <li>
    <strong>Blockchain Technologies:</strong> We have experience working with blockchain
    technologies and can advise you on legal issues related to cryptocurrencies,
    smart contracts, and blockchain-based applications.
  </li>
</ul>

<h2>Why Choose Us</h2>
<p>
  Choosing a law firm to represent your business is an important decision. Here
  are some reasons to choose us:
</p>

<ul>
  <li>
    <strong>Experience:</strong> Our lawyers have years of experience in technology
    law and are knowledgeable about the latest legal developments in the field.
  </li>

  <li>
    <strong>Personalized Service:</strong> We take the time to understand our clients'
    unique needs and tailor our services to meet those needs.
  </li>

  <li>
    <strong>Efficient and Effective:</strong> We strive to provide our services efficiently
    and effectively, so our clients can focus on growing their business.
  </li>

  <li>
    <strong>Cost-Effective:</strong> We offer competitive pricing and work with our
    clients to find cost-effective solutions to their legal needs.
  </li>
</ul>

<h2>Contact Us</h2>
<p>
  If you're interested in learning more about our technology law services,
  please contact us today to schedule a consultation.
</p>
