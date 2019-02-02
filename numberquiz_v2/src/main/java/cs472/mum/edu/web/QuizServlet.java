package cs472.mum.edu.web;

import cs472.mum.edu.model.Question;
import cs472.mum.edu.model.Quiz;

import javax.servlet.RequestDispatcher;
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
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz)session.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }

        String btnRestart = request.getParameter("btnRestart");
        String answer = request.getParameter("txtAnswer");
        String correctAnswer = "";
        int age;
        String errorAgeMsg = null;

        try {
            String txtAge = request.getParameter("txtAge");

            if (txtAge != null) {
                age = Integer.parseInt(txtAge);

                if (age >= 4 && age <= 100) {
                    session.setAttribute("age", age);
                } else {
                    errorAgeMsg = "the number must be within this range";
                }
            }
        } catch(Exception e) {
            errorAgeMsg = "this field is required and they must enter an integer";
        }

        RequestDispatcher quizView = request.getRequestDispatcher("quiz.jsp");
        RequestDispatcher quizOver = request.getRequestDispatcher("quiz_over.jsp");

        boolean error = true;

        if (answer != null && quiz.isCorrect(answer)) {
            error = false;
            quiz.scoreAnswer();
        }

        if (btnRestart != null) {
            error = false;
            quiz.reset();
        }

        if (quiz.isOver()) {
            quizOver.forward(request, response);
        }

        if (quiz.getAttemptCount() == Quiz.MAX_ATTEMPT_COUNT) {
            correctAnswer = quiz.getCurrentQuestion().getAnswer();
        }

        request.setAttribute("errorAgeMsg", errorAgeMsg);
        request.setAttribute("error", error);
        request.setAttribute("answer", answer);
        request.setAttribute("correctAnswer", correctAnswer);
        quizView.forward(request, response);
    }
}
