$(document).ready(function() {
  $('#pendingrequeststable').DataTable({
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
  $('#studentmenutable').DataTable({
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

  $('.refuse-button').click(function() {
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

  $('.confirm-delete').click(function() {
    selectedRow.remove();
    // $('#deletestudent').hide();
  })
});
$('.ok-button').click(function() {
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

  selectedRow.remove();

});
});