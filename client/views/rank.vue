<template>
    <div>
        <rank-header title="排行"></rank-header>
        <rank-list></rank-list>
    </div>
</template>
<script>
    import header from '../components/common_header';
    import list from '../components/rank_contentList';

    export default {
        components: {
            'rank-header': header,
            'rank-list': list
        }
    }
</script>
<style type="text/css">

</style>
