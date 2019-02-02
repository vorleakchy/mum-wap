package cs472.mum.edu.web;

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

        if (quiz.getNumCorrect() == quiz.getNumQuestions()) {
            quizOver.forward(request, response);
        }

        request.setAttribute("error", error);
        request.setAttribute("answer", answer);
        quizView.forward(request, response);
    }
}
