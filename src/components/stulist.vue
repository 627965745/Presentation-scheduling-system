<template>
  <v-container>
      <vuetable-pagination-info ref="paginationInfoTop"

      ></vuetable-pagination-info>

      <vuetable-pagination ref="paginationTop"

                           @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>


    <vuetable ref="stutable"
              api-url="http://projectmirai.top/php/admin/stulist.php"
              :fields="['stu_id', 'stu_name', 'stu_pref1', 'stu_pref2', 'stu_pref3', 'rank', 'settime']"
              :css = "css.table"
              pagination-path=""
              @vuetable:pagination-data="onPaginationData"
              @vuetable:loading="onLoading"
              @vuetable:loaded="onLoaded"
    ></vuetable>
    <v-layout row wrap>
      <vuetable-pagination-info ref="paginationInfo"
                                :css="css.pagination"
      ></vuetable-pagination-info>

      <vuetable-pagination ref="pagination"
                           :css="css.pagination"
                           @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </v-layout>


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
