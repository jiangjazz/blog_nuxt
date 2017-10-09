<template>
    <div class="u-article f-cb">
        <div class="news-img-box f-fl">
            <a href="http://www.duanliang920.com/learn232.html" target="_blank">
                <img class="news-list-img" :src="article1" width="215" height="144" alt="如何建立个人博客？">
            </a>
            <p class="hot">
                热
                <span class="triangle"></span>
            </p>
        </div>``
        <div class="news-content f-fr">
            <h3 class="title-h3">
                <a href="http://www.duanliang920.com/learn232.html" target="_blank">
                    如何建立个人博客？
                </a>
            </h3>
            <div class="author-info f-cb">
                <p class="author f-fl">
                    <a href="/about/">
                        <img src="http://www.duanliang920.com/templets/my/images/author.png" width="33" height="33" alt="段亮">
                        <span>段亮</span>
                    </a>
                </p>
                <span class="date-time f-fl">
                    发布时间：
                    <span>
                        2014-06-05 10:24:00
                    </span>
                </span>
                <span class="classify f-fl">
                    分类：
                    <a href="http://www.duanliang920.com/learn/">学无止境</a>
                </span>
            </div>
            <p class="news-info">
                想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己独立...
            </p>
        </div>

    </div>
</template>

<script>
import article1 from '~/assets/images/articles/article1.jpg'

export default {
    data() {
        return {
            article1
        }
    }
}
</script>
