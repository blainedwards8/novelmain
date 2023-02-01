<script>
  //import ServiceBox from "../components/service-box.svelte";
  import NLG from "/src/img/nlg.png";
</script>

<div class="bg-primary p-10 text-white text-center">
  <img src={NLG} alt="main" style="margin:auto; width:200px;" />
  <div class="text-5xl font-bold">NOVEL LAW GROUP</div>
  <div class="text-xl">ABOUT US</div>
</div>

<div class="about">
  <section id="about">
    <div
      class="text-center m-20 p-5 border-4 bg-primary text-white shadow"
      style="border-radius:10px;"
    >
      <p class="font-bold ">
        The Novel Law Group takes a novel approach to the practice of law by
        using technology to lower costs, speed up deliveries, and increase
        quality of work.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-5 p-10">
      <div class="ms-auto">
        <h3 class="font-bold mb-4">Flat/No Hidden Fees</h3>
        <p class="lead">
          At Novel Law, we love flat fees as much as our clients do. We won't
          send you any bill that you weren't expecting and we didn't discuss
          ahead of time.
        </p>
        <p class="lead">
          We recognize that we won't always be able to bill using a flat fee.
          But even when we cannot, you will know ahead of time what to expect.
        </p>
        <h3>We Will Meet You</h3>
        <p class="lead">
          Don't have time to visit us in our office? We can meet with you in a
          way that is convenient for you.
        </p>
        <p class="lead">
          We offer a variety of ways to meet from online meetings, telephone
          calls, or an in-person meetings at a location convenient to you.
        </p>
        <h3>Convenient Client Portal</h3>
        <p class="lead">
          Our client portal allows us to work with our clients faster. With our
          client portal, you will be able to upload documents, view and pay
          bills, store vital records, and communicate with our legal team.
        </p>
      </div>
      <div class="col-lg-4 me-auto">
        <h3>Ongoing Relationships</h3>
        <p class="lead">
          When documents are signed at the Novel Law Group, we don't say
          goodbye. If you have a question about an estate, please ask it at no
          additional charge. Using our client portal, we will continue to store
          vital records on your behalf.
        </p>
        <h3>Life Changes</h3>
        <p class="lead">
          When life changes, we can help you meet the challenges of those
          changes. Because of initial consultation is always free, we can give
          you a plan ahead of time on how to tackle those challenges.
        </p>
        <p class="lead">Some of our life changing services include:</p>
        <ul>
          <li>
            Helping to sell or transfer property without the need of an agent
          </li>
          <li>Creating an estate plan</li>
          <li>Filing for probate on behalf of a loved one</li>
          <li>Helping you adopt a child</li>
          <li>Starting a business</li>
        </ul>
      </div>
    </div>
  </section>
</div>

<style>
  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .lead {
    margin-bottom: 10px;
  }

  ul li {
    @apply pl-5;
    @apply mt-2;
  }
</style>
