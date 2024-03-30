<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="http://localhost:8080" class="logo">
      <span class="logo-lg">Main</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-navibar',
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  }
}

</script>
