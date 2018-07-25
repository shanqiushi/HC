<template>
    <div class="mhome">
        <div class="m-header">
            <img src="/static/mimg/HHPP1.png" alt="">
            <img src="/static/mimg/HHPP2.png" alt="" class="m-h1" >
        </div>
        <div class="mbottom">
            <div>
                <a href="https://telegr.am/">
                    <img src="/static/mimg/dian.png" alt="">
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/UsechainFoundation">
                    <img src="/static/mimg/fa.png" alt="">
                </a>
            </div>
            <div>
                <a href="https://twitter.com/usechain">
                    <img src="/static/mimg/face.png" alt="">
                </a>
            </div>
            <div>
                <a href="https://github.com/">
                    <img src="/static/mimg/github.png" alt="">
                </a>
            </div>
        </div>
        <div class="mba">
            <a href="/static/whitepaper.pdf" download="whitepaper.pdf">
                <img src="/static/mimg/down.png" alt="">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mhome',
        data() {
            return {
            }
        },
        created() {
            this.setRem(28.43);
            this.fontSize(1120);
            let useragent = navigator.userAgent.toLowerCase()
            let ismobile = /(iphone|ipod|ipad|android)/.test(useragent)
            if (!ismobile) {
                this.$router.push({ path: '/' })
            }
        },
        methods: {
            // loadinghref(){
            //     window.location.href="https://h.cash/"
            // },
            setRem(itemNum) {
                //设置字体rem
                let size = itemNum || 38;
                window.onresize = remSize;
                remSize();
                function remSize() {
                    let html = document.getElementsByTagName("html")[0],
                        w = html.clientWidth;
                    w = w > 768 ? 768 : w;
                    html.style.fontSize = w / size + "px";
                }
            },
            fontSize(itemnum) {
                let html = document.getElementsByTagName("html")[0];
                let a = html.style.fontSize;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0 !important
    }

    .m-header {
        height: 100%;
        width: 100%;
    }

    .m-header img {
        width: 100%;
        height: 100%
    }
    .m-header .m-h1{
        margin-top: -0.2rem;
    }
    .mhome .mbottom {
        height: 5rem;
        width: 100%;
        background-color: #202835;
        display: flex;
        box-sizing: border-box;
        padding: 1rem 2rem;
    }

    .mhome .mbottom>div {
        flex: 1;
        position: relative;
    }

    .mhome .mbottom>div>a {
        width: 50%;
        height: 2rem;
    }

    .mhome .mbottom>div>a>img {
        width: 50%;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }
    .mhome .mba {
        width: 6rem;
        height: auto;
        text-align: center;
        position: fixed;
        left: 0;
        bottom: 6rem;
    }
    .mhome .mba>a{
        width: 100%;
        height: 100%
    }
    .mhome .mba>a>img{
        width: 100%;
        height: 100%
    }
</style>