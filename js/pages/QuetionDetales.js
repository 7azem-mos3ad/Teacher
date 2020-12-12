$(document).ready(function () {
    $('#examsmenutable').DataTable({
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

    $('#questionbankmenutable').DataTable({
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

    $("#questionbankmenutable").on("click", ".edit_button", function () {
        var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
        var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
        var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
        var columFour = $(this).closest("tr").eq(0).find("td span").eq(3);

        console.log(123);
        $("#editquestionbank").on("click", ".edit_button", function () {
            var str = $(".question_bank_name_edit").val();
            $(columOne).text(str);
            console.log(str);
            var str2 = $(".question_bank_level_edit").val();
            $(columTwo).text(str2);

            var str3 = $(".question_bank_unit_edit").val();
            $(columThree).text(str3);

            var str4 = $(".question_bank_lesson_edit").val();
            $(columFour).text(str4);


            columOne = "";
            columTwo = "";
            columThree = "";
            columFour = "";

        });
        $("#editquestionbank").on("show.bs.modal", function (e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".question_bank_name").text();
            $(this).find(".question_bank_name_edit").val(_studentNameTableValue); // from table to model
            var _studentPhoneTableValue = _row.find(".question_bank_level").text();
            $(this).find(".question_bank_level_edit").val(_studentPhoneTableValue);
            var _studentLevelTableValue = _row.find(".question_bank_unit").text();
            $(this).find(".question_bank_unit_edit").val(_studentLevelTableValue);
            var _studentGroupTableValue = _row.find(".question_bank_lesson").text();
            $(this).find(".question_bank_lesson_edit").val(_studentGroupTableValue);
        });
    });

    $("#examsmenutable").on("click", ".edit_button", function () {
        var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
        var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
        var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
        var columFour = $(this).closest("tr").eq(0).find("td span").eq(3);
        var columFive = $(this).closest("tr").eq(0).find("td span").eq(4);
        console.log(123);
        $("#editexam").on("click", ".edit_button", function () {
            var str = $(".exam_name").val();
            $(columOne).text(str);
            console.log(str);
            var str2 = $(".studentlevel").val();
            $(columTwo).text(str2);

            var str3 = $(".exam_content").val();
            $(columThree).text(str3);

            var str4 = $(".exam_count").val();
            $(columFour).text(str4);

            var str5 = $(".exam_time").val();
            $(columFive).text(str5);


            columOne = "";
            columTwo = "";
            columThree = "";
            columFour = "";
            columFive = "";
        });
        $("#editexam").on("show.bs.modal", function (e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".exam_name").text();
            $(this).find(".exam_name_edit").val(_studentNameTableValue); // from table to model
            var _studentPhoneTableValue = _row.find(".studentlevel").text();
            $(this).find(".studentlevel_edit").val(_studentPhoneTableValue);
            var _studentLevelTableValue = _row.find(".exam_content").text();
            $(this).find(".exam_content_edit").val(_studentLevelTableValue);
            var _studentGroupTableValue = _row.find(".exam_count").text();
            $(this).find(".exam_count_edit").val(_studentGroupTableValue);
            var _studentUserNameTableValue = _row.find(".exam_time").text();
            $(this).find(".exam_time_edit").val(_studentUserNameTableValue);
        });
    });

    $(".delete-button").click(function () {
        selectedRow = $(this).closest("tr");
        idSelectedRow = $(this).closest("tr").find(".hide_column").text();

        $(".confirm-delete").click(function () {
            selectedRow.remove();
        });
    });
});