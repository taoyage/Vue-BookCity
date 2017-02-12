<template>
    <div class="u-title">
        <h1>{{title}}</h1>
    </div>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style scoped>
    .u-title {
        margin-bottom: 8px;
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 15px;
        color: #8d8d8d;
    }
    
    .u-title h1 {
        font-size: 15px;
        font-weight: 400;
    }
</style>
