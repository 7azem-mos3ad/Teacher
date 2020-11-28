$(document).ready(function() {
  
$('.group-element').click(function() {

  // event soon ----------------


  
  // ---------------------------
  $('.group-element').removeClass('group-element-select');
  $(this).addClass('group-element-select');
})



  $('#latepaystable').DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15,  "All"]],
    buttons: [

      {
          extend: "print",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "csv",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "excel",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      // {
      //   extend: "pdf",
      //   exportOptions: {
      //     columns: ":visible",
      //     autoPrint: true,
      //     orientation: "landscape",
      //   },
      // },
      {
          extend: "copy",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      "colvis",
  ],
    "language": {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: 'بحث',
      "paginate": {
        "next": "التالي",
        "previous": "السابق"
      }
    },
    columnDefs: [{
      targets: [-1],
      className: "hide_column"
  }]
  });
  $('#absentrepeattable').DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15,  "All"]],
    buttons: [

      {
          extend: "print",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "csv",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      {
          extend: "excel",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      // {
      //   extend: "pdf",
      //   exportOptions: {
      //     columns: ":visible",
      //     autoPrint: true,
      //     orientation: "landscape",
      //   },
      // },
      {
          extend: "copy",
          exportOptions: {
              columns: ":visible",
              autoPrint: true,
              orientation: "landscape",
          },
      },
      "colvis",
  ],
    "language": {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: 'بحث',
      "paginate": {
        "next": "التالي",
        "previous": "السابق"
      }
    },
    columnDefs: [{
      targets: [-1],
      className: "hide_column"
  }]
  });
  
  $('.delete-button').click(function() {
    selectedRow = $(this).closest('tr');
    idSelectedRow = $(this).closest('tr').find(".hide_column").text();
    // axios({
    //         method: 'get',
    //         url: '/admin/student/active/' + id,
    //     }).then(function(response) {
    //         confDlt.remove();
    //         delete confDlt;
    //         delete id;
    //     })
    //     .catch(function(error) {});

    console.log(idSelectedRow);
    $('.confirm-delete').click(function() {
      selectedRow.remove();
      // $('#deletestudent').hide();
    })
});
// ------------------------------




// ok for model
/*
$('#AddNewGroup').click(function() {


  name = $('.AddNewGroupname').val();
  levels_id = $('.newLevel_id').val();
  level_name = $(".newLevel_id").find(":selected").text();
  var t = $('#myTable').DataTable();

  const params = new URLSearchParams();
  params.append('name', String(name));
  params.append('levels_id', parseInt(levels_id));

  axios({
          method: 'post',
          url: '/admin/groups/add',
          data: params
      }).then(function(response) {
          console.log(response.data);
          t.row.add([
              name,
              level_name,
              '<td><button type="button" class="btn btn-success btnedit" data-toggle="modal" data-target="#exampleModal2">تعديل</button></td>',
              '<td><button type="button" class="btn btn-danger btnDelete" data-toggle="modal" data-target="#exampleModal">حذف</button></td>',
              response.data.id
          ]).draw(false);
          $('.AddNewGroupname').val('');
          $("#exampleModal3").modal('hide');
      })
      .catch(function(error) {
          console.log(error);
      });
});

*/




// -----------------------------
} );

