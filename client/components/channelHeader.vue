<template>
    <div class="channel-group__header">
        <h2>{{title}}</h2>
    </div>
</template>
<script>
    export default {
        props: ['title'],
    }
</script>
<style scoped>
    .channel-group__header {
        position: relative;
        padding: 10px 14px;
        border-bottom: 1px solid #f0f0f0;
        border-left: 6px solid #ffab18;
    }
</style>
