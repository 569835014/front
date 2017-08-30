//保留4个缓存页面，先进先出的原则，现在还有问题
// import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
const mixin={
  computed:{
    // ...mapGetters([
    //   'breadcrumbList'
    // ]),
  },
  created(){
    this.saveactiveMenu(this.$route.meta.level);
  },
  methods:{
    ...mapActions([
      // 'saveBreadcrumb'
      'saveactiveMenu'
    ]),
  }
}
export default mixin;
