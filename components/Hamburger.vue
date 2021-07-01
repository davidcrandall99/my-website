<template>
    <div id="hamburger" :class="open">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</template>

<style lang="scss" scoped>
#hamburger {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    .line {
        width: 50px;
        height: 5px;
        background-color: #ecf0f1;
        display: block;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    &:hover{
        cursor: pointer;
    }
    
    &.open {
        .line:nth-child(1){
            -webkit-transform: translateY(13px) rotate(45deg);
            -ms-transform: translateY(13px) rotate(45deg);
            -o-transform: translateY(13px) rotate(45deg);
            transform: translateY(13px) rotate(45deg);
        }
        
        .line:nth-child(2) {
            width: 0px;

        }

        .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(-45deg);
            -ms-transform: translateY(-13px) rotate(-45deg);
            -o-transform: translateY(-13px) rotate(-45deg);
            transform: translateY(-13px) rotate(-45deg);
        }
    }
}
</style>

<script>
export default {
    props: [
        'open'
    ],
    data() {
            return {
                isOpen: this.open
            }

        },
        methods: {
            navOpen: function() {
                this.isOpen = !this.isOpen;
                if(this.isOpen === true) {

                }
            }
        }
}
</script>