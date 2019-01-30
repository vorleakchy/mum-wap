package cs472.mum.edu;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String num1 = request.getParameter("num1");
        String num2 = request.getParameter("num2");
        String num3 = request.getParameter("num3");
        String num4 = request.getParameter("num4");
        String result1 = "";
        String result2 = "";

        try {
            double d1 = Double.parseDouble(num1);
            double d2 = Double.parseDouble(num2);
            double sum = d1 + d2;

            if (!num1.isEmpty() && !num2.isEmpty())
                result1 = fmt(sum);

            double d3 = Double.parseDouble(num3);
            double d4 = Double.parseDouble(num4);
            double multiply = d3 * d4;

            if (!num3.isEmpty() && !num4.isEmpty())
                result2 = fmt(multiply);
        } catch(Exception e) {
            e.getMessage();
        }

        out.print("<html>\n" +
                "<head>\n" +
                "     <title>Simple Calculator</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "     <form action=\"calculator\" method=\"post\">\n" +
                "         <input type=\"number\" name=\"num1\" step=\"any\" value=\"" + num1 + "\" />\n" +
                "         +\n" +
                "         <input type=\"number\" name=\"num2\" step=\"any\" value=\"" + num2 + "\" />\n" +
                "         =\n" +
                "         <input type=\"number\" name=\"result1\" readonly value=\"" + result1 + "\" />\n" +
                "         <br>\n" +
                "         <input type=\"number\" name=\"num3\" step=\"any\" value=\"" + num3 + "\"  />\n" +
                "          *\n" +
                "         <input type=\"number\" name=\"num4\" step=\"any\" value=\"" + num4 + "\"  />\n" +
                "         =\n" +
                "         <input type=\"number\" name=\"result2\" readonly value=\"" + result2 + "\"  />\n" +
                "         <br><input type=\"submit\" />\n" +
                "    </form>\n" +
                "</body>\n" +
                "</html>"
        );
    }

    public static String fmt(double d) {
        if(d == (long) d)
            return String.format("%d",(long)d);
        else
            return String.format("%s",d);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
