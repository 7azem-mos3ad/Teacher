$("#groupsmenutable").DataTable({
    dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
    lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, "All"],
    ],
    buttons: [{
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
    columnDefs: [{
        targets: [-1],
        className: "hide_column",
    }, ],
});
$(".delete-button").click(function () {
    selectedRow = $(this).closest("tr");
    idSelectedRow = $(this).closest("tr").find(".hide_column").text();
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
    $(".confirm-delete").click(function () {
        selectedRow.remove();
        // $('#deletestudent').hide();
    });
});

$("#groupsmenutable").on("click", ".edit_button", function () {
    var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
    var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
    var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
    console.log(55555);
    $("#EditGroup").on("click", ".edit_button", function () {
        var str = $(".student_group2").val();
        $(columOne).text(str);
        var str2 = $(".student_level").val();
        $(columTwo).text(str2);

        var str3 = $(".group_time").val();
        $(columThree).text(str3);
        console.log(str, str2, str3);

        str = "";
        
        columOne = "";
        columTwo = "";
        columThree = "";
    });
    $("#EditGroup").on("show.bs.modal", function (e) {
        var _button = $(e.relatedTarget);
        var _row = _button.parents("tr");
        var _studentLevelTableValue = _row.find(".student_level").text();
        // console.log(_studentLevelTableValue);
        $(this).find(".student_level").val(_studentLevelTableValue);
        var _studentGroupTableValue = _row.find(".student_group").text();
        $(this).find(".student_group").val(_studentGroupTableValue);
        var _studentUserNameTableValue = _row.find(".group_time").text();
        $(this).find(".group_time").val(_studentUserNameTableValue);
    });
});