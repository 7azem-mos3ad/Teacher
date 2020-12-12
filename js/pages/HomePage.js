$(document).ready(function () {

  $('.group-element').click(function () {

    // event soon ----------------



    // ---------------------------
    $('.group-element').removeClass('group-element-select');
    $(this).addClass('group-element-select');
  })



  $('#latepaystable').DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    "lengthMenu": [
      [5, 10, 15, -1],
      [5, 10, 15, "All"]
    ],
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
    "lengthMenu": [
      [5, 10, 15, -1],
      [5, 10, 15, "All"]
    ],
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

  $('.delete-button').click(function () {
    selectedRow = $(this).closest('tr');
    idSelectedRow = $(this).closest('tr').find(".hide_column").text();

    console.log(idSelectedRow);
    $('.confirm-delete').click(function () {
      selectedRow.remove();
    })
  });
  // ------------------------------



  $("#latepaystable").on("click", ".ok-button", function () {
    $("#paymentStudent").on("show.bs.modal", function (e) {
      var _button = $(e.relatedTarget);
      var _row = _button.parents("tr");
      var _studentNameTableValue = _row.find(".student_name").text();
      $(this).find(".student_name").val(_studentNameTableValue); // from table to model

    });
  });

  $("#latepaystable").on("click", ".edit_button", function () {
    $("#editpayment").on("show.bs.modal", function (e) {
      var _button = $(e.relatedTarget);
      var _row = _button.parents("tr");
      var _studentNameTableValue = _row.find(".student_name").text();
      $(this).find(".student_name").val(_studentNameTableValue); // from table to model

    });
  });

});