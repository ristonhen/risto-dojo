<template>
    <div>
      <head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description"/>
      </head>
      <ProductDetails :product="product"/>
    </div>
  </template>
  <script setup>

    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id
    
    //fetch the product
    const { data: product } = await useFetch(uri,{ key: id})
    definePageMeta({
        layout: 'products'
    })

    if (!product.value) {
      throw createError({
        statusCode: 404, statusMessage: 'Product not found',fatal: true
      })
    }
  </script>


