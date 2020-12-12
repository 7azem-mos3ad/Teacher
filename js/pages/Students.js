$(document).ready(function () {
  $("#pendingrequeststable").DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    lengthMenu: [
      [5, 10, 15, -1],
      [5, 10, 15, "All"],
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
    language: {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: "بحث",
      paginate: {
        next: "التالي",
        previous: "السابق",
      },
    },
    columnDefs: [
      {
        targets: [-1],
        className: "hide_column",
      },
    ],
  });
  $("#studentmenutable").DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    lengthMenu: [
      [5, 10, 15, -1],
      [5, 10, 15, "All"],
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
    language: {
      search: '<strong style="padding:5px">البحث</strong>',
      searchPlaceholder: "بحث",
      paginate: {
        next: "التالي",
        previous: "السابق",
      },
    },
    columnDefs: [
      {
        targets: [-1],
        className: "hide_column",
      },
    ],
  });

  $(".refuse-button").click(function () {
    selectedRow = $(this).closest("tr");
    idSelectedRow = $(this).closest("tr").find(".hide_column").text();

    console.log(idSelectedRow);
    $(".confirm-delete").click(function () {
      selectedRow.remove();
    });
  });
  $(".delete-button").click(function () {
    selectedRow = $(this).closest("tr");
    idSelectedRow = $(this).closest("tr").find(".hide_column").text();

    $(".confirm-delete").click(function () {
      selectedRow.remove();
    });
  });
  $(".ok-button").click(function () {
    selectedRow = $(this).closest("tr");
    idSelectedRow = $(this).closest("tr").find(".hide_column").text();

    selectedRow.remove();
  });
  $("#studentmenutable").on("click", ".edit_button", function () {
    var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
    var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
    var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
    var columFour = $(this).closest("tr").eq(0).find("td span").eq(3);
    var columFive = $(this).closest("tr").eq(0).find("td span").eq(4);
    var columSix = $(this).closest("tr").eq(0).find("td span").eq(5);
    console.log(123);
    $("#EditStudent").on("click", ".edit-button", function () {
      var str = $(".student_name").val();
      $(columOne).text(str);
      console.log(str);
      var str2 = $(".student_phone").val();
      $(columTwo).text(str2);

      var str3 = $(".student_level").val();
      $(columThree).text(str3);

      var str4 = $(".student_group").val();
      $(columFour).text(str4);

      var str5 = $(".student_user_name").val();
      $(columFive).text(str5);

      var str6 = $(".user_password").val();
      $(columSix).text(str6);

      columOne = "";
      columTwo = "";
      columThree = "";
      columFour = "";
      columFive = "";
      columSix = "";
    });
    $("#EditStudent").on("show.bs.modal", function (e) {
      var _button = $(e.relatedTarget);
      var _row = _button.parents("tr");
      var _studentNameTableValue = _row.find(".student_name").text();
      $(this).find(".student_name").val(_studentNameTableValue); // from table to model
      var _studentPhoneTableValue = _row.find(".student_phone").text();
      $(this).find(".student_phone").val(_studentPhoneTableValue);
      var _studentLevelTableValue = _row.find(".student_level").text();
      $(this).find(".student_level").val(_studentLevelTableValue);
      var _studentGroupTableValue = _row.find(".student_group").text();
      $(this).find(".student_group").val(_studentGroupTableValue);
      var _studentUserNameTableValue = _row.find(".student_user_name").text();
      $(this).find(".student_user_name").val(_studentUserNameTableValue);
      var _studentPasswordTableValue = _row.find(".user_password").text();
      $(this).find(".user_password").val(_studentPasswordTableValue);
    });
  });
});
