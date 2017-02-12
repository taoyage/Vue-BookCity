<template>
    <div>
        <detail-header title="书籍详情"></detail-header>
        <detail-BookDetail :book="bookDetail"></detail-BookDetail>
        <detail-summary :book="bookDetail"></detail-summary>
        <detail-tags :book="bookDetail"></detail-tags>
        <section class="main-card">
            <detail-TableTitle title="作者其他图书"></detail-TableTitle>
            <detail-BookTable :data="author_books"></detail-BookTable>
        </section>
        <section class="main-card">
            <detail-TableTitle title="喜欢本书的人也喜欢"></detail-TableTitle>
            <detail-BookTable :data="related"></detail-BookTable>
        </section>
		<detail-copyright></detail-copyright>
    </div>
</template>
<script>
    import header from 'components/common_header';
    import BookDetail from 'components/detail_BookDetail';
    import summary from 'components/detail_summary';
    import tags from 'components/detail_tags';
    import bookTable from 'components/bookTable';
    import tableTitle from 'components/detail_TableTitle';
    import copyright from 'components/detail_copyright';

    export default {
        components: {
            'detail-header': header,
            'detail-BookDetail': BookDetail,
            'detail-summary': summary,
            'detail-tags': tags,
            'detail-BookTable': bookTable,
            'detail-TableTitle': tableTitle,
            'detail-copyright':copyright
        },
        data() {
            return {
                author_books: [],
                related: [],
                bookDetail: []
            };
        },
        created() {
            let url = window.location.hash;
            let id = url.match(/[0-9]/g).toString().replace(/,/g, '');
            this.$http.get(`http://localhost:3000/api/detail/${id}`).then((response) => {
                let data = response.body;
                this.author_books = data.author_books;
                this.related = data.related;
                this.bookDetail = data.item;
            }, response => {

            });
        }
    }
</script>
<style type="text/css">
    .main-card {
        border-bottom: 10px solid #f5f5f5;
    }
</style>
