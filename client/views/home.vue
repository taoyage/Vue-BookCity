<template>
    <div>
        <app-header></app-header>
        <app-top></app-top>
        <app-hot></app-hot>
        <app-recommend></app-recommend>
        <app-female></app-female>
        <app-male></app-male>
        <app-free></app-free>
    </div>
</template>
<script>
    import header from 'components/home/header';
    import top from 'components/home/top';
    import hot from 'components/home/hot';
    import recommend from 'components/home/recommend';
    import female from 'components/home/female';
    import male from 'components/home/male';
    import free from 'components/home/free';

    export default {
        components: {
            'app-header': header,
            'app-top': top,
            'app-hot': hot,
            'app-recommend': recommend,
            'app-female': female,
            'app-male': male,
            'app-free': free
        },
        data() {
            return {
                hot: {},
                recommend: {}
            }
        },
        created() {
            this.$http.get('http://localhost:3000/api/home').then((response) => {
                let datas = JSON.parse(response.body);
                this.hot = datas.items[1].data.data;
                this.recommend = datas.items[2].data.data;
            }, response => {
                console.log(err);
            });
        }
    }
</script>
<style type="text/css">

</style>
