<template>
  <div>
    <head-top></head-top>
    <div id="home">
      <Row>
        <i-col span="8">
          <food-life></food-life>
        </i-col>
        <i-col span="8">
          <sport-health></sport-health>
        </i-col>
        <i-col span="8">
          <study-up></study-up>
        </i-col>
      </Row>
      <Row>
        <i-col span="8">
          <hobby-interest></hobby-interest>
        </i-col>
        <i-col span="8">

        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/header/header'
  import foodLife from '../components/food-life/food-life'
  import sportHealth from '../components/sport-health/sport-health'
  import studyUp from '../components/study-up/study-up'
  import hobbyInterest from '../components/hobby-interest/hobby-interest'
  export default {
    data () {
      return {
        i: 0
      }
    },
    components: {
      headTop,
      foodLife,
      sportHealth,
      studyUp,
      hobbyInterest
    },
    methods: {
    }
  }
</script>
