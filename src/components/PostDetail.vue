<template>
    <div class="container">
        <h5>상세페이지</h5>
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
    </div>

    <router-view></router-view>
</template>

<script>
    export default {
        name: 'PostDetail',
        data() {
            return {
                post: this.postList.find(post=>post.number===parseInt(this.$route.params.number)),
            };
        },
        props: {
            postList: [Object],
        }
    }
</script>

<style>
</style>