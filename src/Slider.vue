<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <va-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </va-slide-item>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import VASlideItem from './components/VASlideItem'

export default {
  name: 'va-slider',
  props: {
    slideMenuItems: {
      type: Array,
      default: []
    }
  },
  created () {

  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  components: {
    'va-slide-item': VASlideItem
  }
}
</script>
