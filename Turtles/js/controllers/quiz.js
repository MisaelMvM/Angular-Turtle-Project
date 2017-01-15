(function() {
    angular
        .module("turtleFacts")
        .controller("quizCtrl", quizController);
    
        QuizController.$inject = ['quizMetrics'];
    
        function QuizController(quizMetrics) {
            var vm = this;
            
            vm.quizMetrics = quizMetrics;
            
        }
    
})();