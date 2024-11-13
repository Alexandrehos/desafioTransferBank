const app = Vue.createApp({
  // Podemos colocar o template direto aqui:
  // template: "<h2>Aqui é o template22</h2>",

  data() {
    return {
      showBook: true,
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "the way of kings", author: "brandon sanderson" },
        { title: "the final empire", author: "brandon sanderson" },
      ],
      books2: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: false,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    mudarTitulo(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
    handleEvent(e, data) {
      console.log(e.type, e);
      // Lembra que nem todas as vezes que o método handleEvent é chamado ele possui o parâmetro data.
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },

  computed: {
    favoriteBooks() {
      return this.books2.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
