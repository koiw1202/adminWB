<template>
  <!-- Info boxes -->
  <section class="content">

    
    <!-- Main row -->
    <row>
      <!-- TABLE: LATEST ORDERS -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">옵션 리스트</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                <tr>
                  <th style="width: 80px;" >옵션코드</th>
                  <th style="width: 80px;" >옵션명</th>
                  <th style="width: 80px;" >옵션가격</th>
                  <th style="width: 80px;" ></th>
                  <th style="width: 80px;" ></th>
                  <th style="width: 80px;" ></th>
                </tr>
                </thead>

                <tbody>
                  <tr :key="i" v-for="(option,i) in optionList">
                    <td>{{option.optionCd}}</td>
                    <td>{{option.optionNm}}</td>
                    <td>{{option.amt}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </row>
    <!-- /.row -->
  </section>
</template>

<script>
export default {
  name: 'sample',
  created () {
  },
  data () {
    return {
      optionList: [
        {optionCd: 'C', optionNm: '티볼리', amt: '가솔린'},
        {optionCd: 'C', optionNm: '티볼리', amt: '디젤'},
        {optionCd: 'C', optionNm: '티볼리', amt: '가솔린2'},
        {optionCd: 'C', optionNm: '티볼리', amt: '디젤2'}
      ]
    }
  }
}
</script>
