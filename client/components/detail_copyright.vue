<template>
    <section class="main-card">
        <copyright-title title="图书信息"></copyright-title>
        <div class="u-text">
            <h1>版权：读之前先问过我贝尔</h1>
        </div>
    </section>
</template>
<script>
    import tableTitle from 'components/detail_TableTitle';
    export default {
        components: {
            'copyright-title': tableTitle,
        }
    }
</script>
<style scoped>
    .main-card {
        border: none;
    }
    
    .u-text {
        margin-bottom: 8px;
        padding-left: 14px;
        padding-right: 14px;
        color: #8d8d8d;
    }
    
    .u-text h1 {
        font-size: 15px;
        font-weight: 400;
    }
</style>
