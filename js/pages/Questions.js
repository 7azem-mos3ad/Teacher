$("select").change(function () {
  var mcqQuestion = $('.mcq-question');
  var trueFalse = $('.true-false-question');
  var imagesQuestion = $('.images-question');
    $("select option:selected").each(function () {
      var value = $(this).val();
      if(value === 'mcq_question') {
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "block");
        imagesQuestion.css("display", "none");
      } else if(value === "true_fales_question") {
        trueFalse.css("display", "block");
        mcqQuestion.css("display", "none");
        imagesQuestion.css("display", "none");
      } else if(value === "images_question") {
        imagesQuestion.css("display", "block");
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "none");
      } else {
        imagesQuestion.css("display", "none");
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "none");
      }
    });
  })
  .change();

$(".answer-element input").on("click", function () {
  var selectedAnswer = $(this).parent();
  var allAnswers = $(this).parent().parent().children();
  allAnswers.removeClass("selected-answer");
  selectedAnswer.addClass("selected-answer");
});
$("#more_answers").click(function () {
  $(".wrong-answer").append('<input type="text" name="wrong_answer[]">');
});
$("#delete_answer").click(function () {
  console.log("hahahah");
  $(".wrong-answer input").last().remove();
});

var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
var loadFile1 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output1");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
var loadFile2 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output2");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
var loadFile3 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output3");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

CKEDITOR.replace("question_input");
