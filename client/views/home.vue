<template>
    <div>
        <app-header></app-header>
        <app-top></app-top>
    </div>
</template>
<script>
    import header from 'components/home/header';
    import top from 'components/home/top'
    export default {
        components: {
            'app-header': header,
            'app-top': top
        }
    }
</script>
<style type="text/css">

</style>
