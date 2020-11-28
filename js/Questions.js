$('.answer-element input').on( "click", function() {
  var selectedAnswer = $(this).parent();
    var allAnswers = $(this).parent().parent().children();
    allAnswers.removeClass('selected-answer');
    selectedAnswer.addClass('selected-answer');
  
  });