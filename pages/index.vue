<template>
  <v-app>
  <v-toolbar class="deep-purple">
    <v-toolbar-title>HCI Project</v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>Currencies</v-btn>
        <v-btn flat dark>Shares</v-btn>
        <v-btn flat dark>Conversion</v-btn>
      </v-toolbar-items>
  </v-toolbar>
  <section class="options">
    <v-layout>
    <v-flex xs12 sm2>
    <v-select
      :items="coinList"
      v-model="e1"
      label="Cryptocurrency"
      class="input-group--focused"
      multiple
      chips
      item-value="code"
    ></v-select>
    <v-select
      :items="visualization"
      v-model="e2"
      label="Display type"
      class="input-group--focused"
      item-value="text"
    ></v-select>
    <v-btn id="update_btn" @click="update()">
      Update
    </v-btn>
    </v-flex>
    </v-layout>
  </section>
  
  <line-chart :data="chartData"/>

  <section class="container">
    <div hidden>
      <h1 class="title">
        Stocks and currencies exchange
      </h1>
      <h2 class="subtitle">
        HCI project
      </h2>
      <div class="links">
        <a
          href="charts"
          target="_top"
          class="button--green">Charts</a>
        <a
          href="tables"
          target="_top"
          class="button--grey">Tables</a>
      </div>
    </div>
  </section>
  </v-app>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'
import coinlist from '~/components/coinlist.json'

export default {
  components: {
    AppLogo
  },

  methods: {
      getPosts(section) {
      let API_KEY = "HDVVBK9F8GE4WWH5";
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        console.log(response.data.results);
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    },

    update() {
      var HttpClient = function () {
      this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
        }
      };
      var client = new HttpClient();
      let url = "https://min-api.cryptocompare.com/data/histoday?fsym=";
      var res = this.e1;
      var i;
      var temp = [];
      console.log(res);
      res.forEach((resEl, i) => { client.get(url + this._data.e1[i] + "&tsym=USD&limit=10", function(response){
        var symbol = resEl;
        var retVal = JSON.parse(response);
        var j;
          var retValPushed = {name: symbol, data: {}}
          for (j = 0; j < retVal.Data.length; j++) {
            var timeF = retVal.Data[j].time;
            retValPushed.data[timeF] = retVal.Data[j].high;
          }
          temp.push(retValPushed);})
      });
      this.chartData = temp;
    }
  },

  head() {
    return {
      title: "HCI project",
      script: [
      { src: 'https://www.gstatic.com/charts/loader.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    };
  },

  data() {
    return {
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      visualization: ['Graph', 'Table'],
      chartData: []
    };
  },

  computed: {
    coinList: function () {
      return coinlist;
    }
  }
}

</script>

<style>
.options {
  padding: 24px;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
