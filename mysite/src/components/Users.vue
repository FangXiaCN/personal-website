<template>
  <div class="users">
    <ul>
      <li v-for="user in  users">
        {{user  ``}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Users",
  data(){
  return {
    users:["Henry", "Bucky", "Emily"]
  }
  }
}
</script>

<style scoped>

</style>
