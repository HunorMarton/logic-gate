<template lang="pug">
  .about
    h1 Logic gates
    p Interactive logic gate simulator build with Vue
    h3 Source code
    a(href="https://github.com/HunorMarton/logic-gate" target="_blank") https://github.com/HunorMarton/logic-gate
    h3 Made by
    div Hunor Márton Borbély
    div 2020
    a(href="https://twitter.com/HunorBorbely" target="_blank") Twitter
    a(href="https://hunormarton.github.io/" target="_blank") Website
</template>

<style lang="scss" scoped>
.about {
  color: #404e7c;
  background-color: white;
  font-size: 0.9em;
  padding: 50px 20px;

  * {
    display: block;
    margin-bottom: 20px;
  }
}

h1,
h3 {
  color: #71b48d;
  margin-top: 40px;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  color: #404e7c;
}
</style>
