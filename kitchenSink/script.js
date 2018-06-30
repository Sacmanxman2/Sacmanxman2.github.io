function randLine(data){
  var randLineNum = Math.floor(Math.random() * data.length);
  return(data[randLineNum]);
}

var app = new Vue({
  el: '#app',
  mounted: function() {
    this.itemGen();
  },
  data: {
    prop: "Test prop",
    character: "Test character",
    dialogue: "Test line of dialogue",
  },
  methods: {
    itemGen: function(event) {
      this.prop = randLine(props);
      this.character = randLine(firstNames) + " " + randLine(lastNames) + ", " + randLine(jobs);
      this.dialogue = '"' + randLine(linesOfDialogue) + '"';
    }
  }
})
