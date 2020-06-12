var vm = new Vue({
  el: "#app",
  data: {
    movies: [ {
    "name": "2/1 Magic",
    "type": "Drama, Action",
    "cover": "https://im.marieclaire.com.tw/s805c452h100b0/assets/mc/202002/5E4D19732465B1582111091.jpeg",
    "description": "Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
    "price": 80,
    "open": false
  },
  {
    "name": "Frozen 2",
    "type": "Drama, Action",
    "cover": "https://assets.juksy.com/files/articles/95967/800x_100_w-5dc63b29c093b.jpg",
    "description": "Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
    "price": 50,
    "open": false
  },
  {
    "name": "Blade Runner 2046",
    "type": "Drama, Action",
    "cover": "https://imgc.allpostersimages.com/img/posters/blade-runner-2049-fire-ice_u-L-F9524N0.jpg?src=gp&w=300&h=375",
    "description": "Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
    "price": 30,
    "open": false
  },
  {
    "name": "Harry Potter",
    "type": "Drama, Action",
    "cover": "https://i.pinimg.com/originals/61/2b/bf/612bbfe53a59beb87e6dd2e8047d2866.jpg",
    "description": "Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",
    "price": 150,
    "open": false
  }, ],
    cart: [],
    currentMovie: null,
    iscartopen: false,
  },
  
  // created(){
  //   let apiUrl ="https://awiclass.monoame.com/api/command.php?type=get&name=movies"
  //    axios.get(apiUrl).then(res=>{this.movies=res.data})
  // },
  methods: {
    bgcss(url){
      return {'background-image': 'url('+url+')',
             'background-size': 'cover',
             'background-position': 'center center'}
    },
   wheel(evt){
      console.log(evt.deltaY)
      TweenMax.to(".cards",0.8,{
        left: "+="+evt.deltaY*2+"px"
      })
    },
   addCart(movie,evt) {
     this.currentMovie = movie
     let target= evt.target
     this.$nextTick(()=>{
       TweenMax.from(".buybox",0.8,{
         left: $(evt.target).offset().left,
         top: $(evt.target).offset().top,
         opacity: 1,
         ease: Power1.easeIn
       })
     })
     
     // this.cart.push(movie)
     // console.log(evt)
     setTimeout(()=>{
       this.cart.push(movie)
     },800)
     
   }
  },
  computed: {
    totalprice(){
      return this.cart
        .map(movie=>movie.price)
        .reduce((total,p)=>total+p,0)
      
    }
  },
  watch: {
    cart(){
      TweenMax.from(".fas.fa-shopping-cart",0.6,{
        scale: 0.5
      })
    }
    
  }
  
 
})