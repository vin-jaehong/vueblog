import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/list',
        component: PostList,
    },
    {
        path: '/post_detail/:number',
        component: PostDetail,
        children: [
            {
                path: 'author',
                component: Author,
            },
            {
                path: 'comment',
                component: Comment,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
