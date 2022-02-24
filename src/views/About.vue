<template>
  <div class="about">
    <Documentation />
  </div>
</template>

<script>
// @ is an alias to /src
import Documentation from "@/components/Documentation.vue";

export default {
  name: "About",
  components: {
    Documentation,
  },
};
</script>
