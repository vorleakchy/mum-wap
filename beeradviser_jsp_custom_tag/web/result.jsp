<%--
  Created by IntelliJ IDEA.
  User: vorleakchy
  Date: 2019-01-30
  Time: 12:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Beer Adviser</title>
</head>
<body>

    <c:forEach var="style" items="${styles}">
        <br>try: ${style}
    </c:forEach>

</body>
</html>
