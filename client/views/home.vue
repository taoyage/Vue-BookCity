<template>
    <div>
        <app-header></app-header>
        <app-top></app-top>
        <app-hot :HotData="HotData"></app-hot>
        <app-recommend :RecommendData="RecommendData"></app-recommend>
        <app-female :FemaleData="FemaleData"></app-female>
        <app-male :MaleData="MaleData"></app-male>
        <app-free :FreeData="FreeData"></app-free>
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
                HotData: {},
                RecommendData: {},
                FemaleData: {},
                MaleData: {},
                FreeData: {}
            }
        },
        created() {
            this.$http.get('http://localhost:3000/api/home').then((response) => {
                let datas = JSON.parse(response.body);
                this.HotData = datas.items[1].data.data;
                this.RecommendData = datas.items[2].data.data;
                this.FemaleData = datas.items[3].data.data;
                this.MaleData = datas.items[4].data.data;
                this.FreeData = datas.items[5].data.data;
            }, response => {
                console.log(err);
            });
        }
    };
</script>
<style type="text/css">

</style>
