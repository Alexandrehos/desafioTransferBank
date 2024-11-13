<template>
  <!--1
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
  -->
  <!--2
    <div class="home">
      <h1>Home</h1>
      <p>My name is {{ name }} and my age is {{ age }}</p>
      <button @click="handleClick">click me</button>
      <button @click="age++">add 1 to age</button>
      <input type="text" v-model="name">
    </div>
    -->
  <!--3
    <div class="home">
      <h1>Home</h1>
      <h2>Refs</h2>
      <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
      <button @click="updateNinjaOne">Update ninja one</button>
      <h2>Reactive</h2>
      <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
      <button @click="updateNinjaTwo">Update ninja two</button>
    </div>
    -->
  <!--4
    <div class="home">
      <h1>Home</h1>
      <input type="text" v-model="search" />
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    </div>
    -->
  <!--5
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
  -->
  <!--6
    <div class="home">
      <h1>Home</h1>
      <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">delete a post</button>
    </div>
    -->
  <!--7
    <div class="home">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>Loading...</div>
    </div>
    -->
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

import PostList from "../components/PostList.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    /*1
    const p = ref();
    console.log("Valor p:" + p);
    console.log(p);
    console.log("Valor p.value: " + p.value);
    console.log(p.value);
    console.log("=============");
    const handleClick = (e) => {
      console.log("Valor p:" + p);
      console.log(p);
      console.log("Valor p.value: " + p.value);
      console.log(p.value);
      p.value.classList.add("test");a
      p.value.textContent = "hello, ninjas";
    };
    */
    /*2
    const name = ref("mario");
    const age = ref(30);
    const handleClick = (e) => {
      name.value = "luigi";
      age.value = 35;
    };
    return { name, age, handleClick };
    */
    /*3
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }
    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo }
    */
    /*4
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);
    const matchingNames = computed(() => {
      // return ['a', 'b', 'c']
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
    */
    /*5
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect ran", search.value);
      console.log(names.value);
    });
    
    const handleClick = () => {
      stopWatch();
      stopEffect();
    };
    
    return { names, search, matchingNames, handleClick };
    */
    /*6
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);
    const showPosts = ref(true);
    
    return { posts, showPosts };
    */
    /*7
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no available data");
        }
        posts.value = await data.json();
        console.log(posts.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    load();
    
    return { posts, error };
    */

    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
