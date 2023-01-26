<template>
    <div>
        <p>{{ data }}</p>
    </div>
</template>
  
  <script setup>

//   const { data } = await useFetch('/api/risto?name=risto',{
//     method: 'post',
//     body: { age: 27 }
//   })
    // const { data } = await useFetch('/api/risto')
    const { data } = await useFetch('/api/currency/USD')
  </script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
router-link-exact-active {
      color: #12b488;
    }
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>