<template>
  <v-container>

    <vuetable ref="marktable"
              api-url="http://projectmirai.top/php/admin/marklist.php"
              :fields="['mark_id', 'mark_name', 'mark_avail']"
              :css = "css.table"
              pagination-path=""

    ></vuetable>

  </v-container>
</template>

<script>
  import Vuetable from 'vuetable-2'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  export default {
    data () {
      return {
        ajax: null,
        css: {
          table: {
            tableClass: 'table table-striped table-bordered table-hovered',
            loadingClass: 'loading',
            ascendingIcon: 'glyphicon glyphicon-chevron-up',
            descendingIcon: 'glyphicon glyphicon-chevron-down',
            handleIcon: 'glyphicon glyphicon-menu-hamburger',
          },
          pagination: {
            infoClass: 'pull-left',
            pageClass: 'massive',
            linkClass: 'mini',
            paginationClass: 'ui bottom attached segment grid',
            paginationInfoClass: 'left floated left aligned six column',
            icons: {
              first: '',
              prev: '',
              next: '',
              last: '',
            },
          }
        },
      }
    },
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.paginationTop.setPaginationData(paginationData)
        this.$refs.paginationInfoTop.setPaginationData(paginationData)
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.stutable.changePage(page)
      },
      onLoading() {
        console.log('loading... show your spinner here')
      },
      onLoaded() {
        console.log('loaded! .. hide your spinner here')
      }
    }
  }
</script>
