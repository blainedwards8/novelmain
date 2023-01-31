<script>
  export let title = "Hello";
  export let url = "/";
</script>

<div>
  <a href={url}>
    <div
      class="mb-3 mx-3 p-5 bg-primary text-white text-xl font-bold h-48 rounded-lg shadow-sm"
    >
      {title}
    </div>
  </a>
</div>
