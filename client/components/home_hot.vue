<template>
    <section class="channel-group main-card">
        <top title="本周最火"></top>
        <bookTable :data="HotData"></bookTable>
        <a class="channel-group__footer" href="/free">查看更多&gt;&gt;</a>
    </section>
</template>
<script>
    import channelHeader from './channelHeader';
    import bookTable from './bookTable';
    
    export default {
        components: {
            'top': channelHeader,
            'bookTable': bookTable
        },
        props: ['HotData']
    };
</script>
<style scoped>
    .channel-group {
        position: relative;
    }
    
    .main-card {
        background: #fff;
        border-bottom: 10px solid #f5f5f5;
    }
    
    .channel-group__footer {
        display: block;
        padding: 14px 0;
        font: 13px/1.3em a;
        border-top: 1px solid #f0f0f0;
        text-align: center;
    }
</style>
