<template>
    <div class="card w-100">
        <div class="card-body">
            <h1 class="card-title">{{ itemTitle }}</h1>
            <p class="card-text">{{ itemDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        itemTitle: String,
        itemDescription: String,
        price: Number,
    },
}
</script>
<style lang="" scoped>
    
</style>