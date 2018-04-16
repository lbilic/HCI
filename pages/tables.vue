<template>
  <section class="container">
    <div>
      <h1 class="title">
        Table view of stocks values
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

  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
  </div>

  <div>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td colspan="100%" class="text-xs-right">{{ props.item.name }}</td>
      <td colspan="100%" class="text-xs-right">{{ props.item.power }}</td>
  </template>
  <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
  </template>
  </v-data-table>
  </div>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },

  head() {
    return {
      title: "Tables visualization"
    };
  },

  data() {
    return {
      headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { 
        text: 'Power',
        value: 'power'
      }
      ],
      searchQuery: '',
      gridColumns: ['name', 'power'],
      items: [
        { name: 'Chuck Norris', power: Infinity, },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    };
  }
}

</script>

<style>
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
  font-size: 60px;
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

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
