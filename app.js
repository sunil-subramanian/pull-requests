const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Finish the course and master Vue",
    };
  },
});

app.mount("#user-goal");

console.log(Vue);
