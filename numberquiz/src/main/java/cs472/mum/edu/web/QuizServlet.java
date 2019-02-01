package cs472.mum.edu.web;

import cs472.mum.edu.model.Quiz;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        Quiz quiz = loadQuiz(request);

        String btnRestart = request.getParameter("btnRestart");
        String answer = request.getParameter("txtAnswer");

        boolean error = true;

        if (btnRestart != null) {
            quiz.reset();
            session.setAttribute("quiz", quiz);
            genQuizPage(quiz, out, quiz.getCurrentQuestion().getQuestion(), false, null);
            return;
        }

        if (answer != null && quiz.isCorrect(answer)) {
            error = false;
            quiz.scoreAnswer();
            session.setAttribute("quiz", quiz);
        }

        if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
            genQuizOverPage(out);
            return;
        }

        genQuizPage(quiz, out, quiz.getCurrentQuestion().getQuestion(), error, answer);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Quiz quiz = loadQuiz(request);

        if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
            genQuizOverPage(out);
            return;
        }

        genQuizPage(quiz, out, quiz.getCurrentQuestion().getQuestion(), false, null);
    }

    private Quiz loadQuiz(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz)session.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }

        return quiz;
    }

    private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print(" <link href='css/bootstrap.min.css' type='text/css' rel='stylesheet'>");
        out.print(" <link href='css/style.css' type='text/css' rel='stylesheet'>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post' class='form-quiz'>");
        out.print("   <div class='text-center mb-4'>");
        out.print("		<h3 class='h3 mb-3 font-weight-normal'>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' class='form-control' required autofocus /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' class='btn btn-lg btn-primary btn-block' value='Next' />" +
                "<input type='submit' name='btnRestart' class='btn btn-secondary btn-lg btn-block' value='Restart' /></p> ");

        out.print("</div>");
        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print(" <link href='css/bootstrap.min.css' type='text/css' rel='stylesheet'>");
        out.print(" <link href='css/style.css' type='text/css' rel='stylesheet'>");
        out.print(" <title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<form method='post' class='form-quiz'>");
        out.print("<div class='text-center mb-4'>");
        out.print("<h3 class='h3 mb-3 font-weight-normal' style='color:red'>The number quiz is over!</h3>");
        out.print("<p><input type='submit' name='btnRestart' class='btn btn-lg btn-primary btn-block' value='Start Again!' /></p>");
        out.print("</div>");
        out.print("</form>");
        out.print("</body> ");
        out.print("</html> ");
    }
}
