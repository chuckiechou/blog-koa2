const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
    const { username, password } = ctx.request.body;
    ctx.body = {
        errno: 0,
        username,
        password
    }
})

router.get('/login-test', async function (ctx, next) {
    if (ctx.session.viewcount == null) {
        ctx.session.viewcount = 0;
    }
    ctx.session.viewcount++;
    ctx.body = {
        errno: 0,
        viewcount: ctx.session.viewcount
    }
})


module.exports = router