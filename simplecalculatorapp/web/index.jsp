<%--
  Created by IntelliJ IDEA.
  User: vorleakchy
  Date: 2019-01-29
  Time: 19:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Simple Calculator</title>
  </head>
  <body>
    <form action="calculator" method="post">
        <input type="number" name="num1" step="any" />
        +
        <input type="number" name="num2" step="any" />
        =
        <input type="number" name="result1" readonly />
        <br>
        <input type="number" name="num3" step="any" />
        *
        <input type="number" name="num4" step="any" />
        =
        <input type="number" name="result2" readonly />
        <br><input type="submit" />
    </form>
  </body>
</html>
