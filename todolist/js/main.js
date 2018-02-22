new Vue({
  el:'#app',
  data:{
      message:'hello world',
      todos:[
        {id:1,title:'买菜'},
          {id:2,title:'吃饭'}
      ],
      newTodo:{id:null,title:''},
    },
      methods:{
        addTodo(newTodo) {
          this.todos.push(newTodo)
          this.newTodo={id:null,title:''}
        },
        deleteTodo(index){
          this.todos.splice(index,1)
        }
      },


})
