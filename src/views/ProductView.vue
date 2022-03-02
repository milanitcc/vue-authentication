<template>
    <div>
        {{ this.$store.getters.isAuthenticated }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(["token"])
    },
}
</script>
