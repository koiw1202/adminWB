<template>
  <!-- Info boxes -->
  <section class="content">

    
    <!-- Main row -->
    <row>
      <!-- TABLE: LATEST ORDERS -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">차량 리스트</h3>

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
                  <th style="width: 80px;" >차량종류 코드</th>
                  <th style="width: 80px;" >차량종류 코드명</th>
                  <th style="width: 80px;" >차량코드</th>
                  <th style="width: 150px;" >차량코드</th>
                  <th style="width: 80px;" ></th>
                </tr>
                </thead>

                <tbody>
                  <tr :key="i" v-for="(car,i) in carList">
                    <td>{{car.carTypeCd}}</td>
                    <td>{{car.carTypeNm}}</td>
                    <td>{{car.carCd}}</td>
                    <td>{{car.carNm}}</td>
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
      carList: [
        {carTypeCd: 'C', carTypeNm: '티볼리', carCd: 'C001', carNm: '가솔린'},
        {carTypeCd: 'C', carTypeNm: '티볼리', carCd: 'C002', carNm: '디젤'},
        {carTypeCd: 'C', carTypeNm: '티볼리', carCd: 'C003', carNm: '가솔린2'},
        {carTypeCd: 'C', carTypeNm: '티볼리', carCd: 'C004', carNm: '디젤2'}
      ]
    }
  }
}
</script>
