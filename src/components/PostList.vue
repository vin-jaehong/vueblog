<template>
    <div class="container">
        <div v-for="post of postList" :key="post.number" class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted"> {{ post.date }} </h6>
                <p class="card-text">Card</p>
                <a href="#" class="card-link" @click="$router.push(`/post_detail/${post.number}`)">보기</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        props: {
            postList: [Object],
        }
    }
</script>

<style>
</style>