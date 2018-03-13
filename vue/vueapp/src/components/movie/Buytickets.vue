<template>
  <div class="theater">
    <!--请选择影院：
      <select name="" id="">
        <option value="" v-for="(item,index) in buyList" :key="index"> {{ item.cinema }} </option>
      </select>-->
    <h3>泰莱时代影城</h3>
    <ul class="seat" >
      <li v-for="(item,index) in num" :class="{aa:item.bFlag}" @click="change(item),add(index,item)"></li>
    </ul>
    <button class="buy" @click="success">购买，共计{{ csum }}元</button>
  </div>

</template>

<script>
  import axios from "axios";
  export default{
      data(){
        return{
          buyList:[],
          sum:0,
          row:9,
          line:10,
          price: 30,
          num: [{
              bFlag:false,
              price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          },{
            bFlag:false,
            price:0
          }]
        }
      },
      created(){
      axios.get('/static/data/buy.json')
      .then(res => {
        this.buyList = res.data.data;
        this.isLoading = false;

      })
      .catch(res => {
        alert("error");
      });
    },
    mounted(){
      if (this.buyList.seat){
        for (let i=0;i < this.buyList.row;i++){
            this.num.push({
                bFlag:false,
                price:0
            })
        }
      }else if(this.buyList.seats <= 220){
        for (let i=0;i < this.buyList.row;i++){
          this.num.push({
            bFlag:false,
            price:0
          })
      }}else if(this.buyList.seats <= 275){
          for (let i=0;i < this.buyList.row;i++){
            this.num.push({
              bFlag:false,
              price:0
            })
        }
      }
    },
    methods:{
        change(a){
            a.bFlag =! a.bFlag
        },
        add(b,c){
            let minrow=(this.row-3)/2-2;
            let maxrow=(this.row-3)/2+2;
            let minline=this.line/2-2;
            let maxline=this.line/2+2;
            if (b/10 < minrow || b/10> maxrow || b%10 < minline || b%10 > maxline){
                c.price=this.price*0.8;
            }else {
                c.price=this.price;
            }
        },
      success(){
          alert("购票成功！")
      }
    },
    computed:{
      csum(){
        let temp = 0;
        this.num.forEach((item , index)=>{
          if(item.bFlag){
            temp += item.price;
          }
        });
        return temp;
      }
    }
  }
</script>

<style scope>

  .seat{
    padding: .2rem;
  }
  .seat li{
    width: .4rem;
    height: .4rem;
    background: #f7f5d1;
    float: left;
    margin: .1rem;

  }
  .seat .aa{
    background: #ff6700;
  }
  h3{
    text-align: center;
  }
  .buy{
    width: 90%;
    background: rgb(239,66,56);
    color: #ffff;
    padding: .2rem;
    margin: .3rem;
  }
</style>
