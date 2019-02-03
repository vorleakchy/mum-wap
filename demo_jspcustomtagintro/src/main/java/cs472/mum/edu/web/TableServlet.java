package cs472.mum.edu.web;

import cs472.mum.edu.model.Student;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/TableServlet")
public class TableServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatcher =
                request.getRequestDispatcher("table.jsp");
        dispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Student[] table = new Student[]
                {
                        new Student("bob", 23),
                        new Student("jill", 33),
                        new Student("kim", 18)
                };

        request.setAttribute("students", table);
        RequestDispatcher dispatcher =
                request.getRequestDispatcher("table.jsp");
        dispatcher.forward(request, response);
    }
}
