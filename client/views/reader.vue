<template>
    <div>
        <reader-top></reader-top>
        <reader-content></reader-content>
        <reader-bottom></reader-bottom>
    </div>
</template>
<script>
    import reader_top from '../components/reader_top';
    import reader_content from '../components/reader_content';
    import reader_bottom from '../components/reader_bottom';

    export default {
        components: {
            'reader-top': reader_top,
            'reader-content': reader_content,
            'reader-bottom': reader_bottom
        }
    }
</script>
<style scoped>
	
</style>
