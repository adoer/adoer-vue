import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                header: header,
                sidebar: sidebar,
                content: content
            }
        }
    ]
})
