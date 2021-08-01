new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title: '',
          time: ''
      }
    },
    
    computed: {
        totalTime(){
            if(!this.courses.length){return}
            return this.courses.reduce((a, b) => a + parseInt(b.time),0)
        }
    },
    
    methods: {
        addCourse(){
            if(this.title && this.time){
                this.courses.push({
                    title:this.title, 
                    time:this.time
                })
                this.title= '',
                this.time= ''
            }
            else{alert('completa todos los campos')}
        }
    }
  })