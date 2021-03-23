var app = new Vue(
  {
    el: '#root',
    data: {
      message: 'Hello',
      image: "https://clutchpoints.com/wp-content/uploads/2020/04/Zion-Williamson-.jpg",
      dispN: "click",
    },
    methods: {
      show: function() {
        if(this.dispN == "click"){
          this.dispN = "on";
        } else if(this.dispN == "on"){
          this.dispN = "click";
        }
      }
    }
  }
);
