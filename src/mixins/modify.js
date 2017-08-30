const modify={
  created(){
    if(this.$route.params.id!=='add'&&!this.$route.params.item){
      this.$router.push({
        'name':this.$route.name.replace('Option','')
      })
    }else{
      if(this.$route.params.item){
        this.item=this.$route.params.item;
        this.index=this.$route.params.index;
      }

    }
  }
}
export default modify
