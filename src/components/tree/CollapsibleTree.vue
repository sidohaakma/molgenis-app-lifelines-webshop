<template>
  <div id="tree-view">
    tree

    <ul class="list-group">
      <template v-for="parent in structure">
        <li class="list-group-item active px-4 text-truncate" role="button">
          <font-awesome-icon
            icon="caret-right"
            class=""
          />
          {{parent.name}}
        </li>
        <li class="list-group-item p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item px-4 text-truncate" role="button" v-for="child in parent.children">{{child.name}}</li>
          </ul>
        </li>
      </template>
    </ul>

  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'CollapsibleTree',
    props: {
      structure: {
        type: Array,
        required: true
      }
    }
  })
</script>
