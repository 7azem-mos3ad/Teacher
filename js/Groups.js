$('#groupsmenutable').DataTable({
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