<%@ page import="cs472.mum.edu.model.Quiz" %><%--
  Created by IntelliJ IDEA.
  User: vorleakchy
  Date: 2019-02-01
  Time: 14:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <link href='https://getbootstrap.com/docs/4.2/dist/css/bootstrap.min.css' type='text/css' rel='stylesheet'>
    <link href='css/style.css' type='text/css' rel='stylesheet'>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://getbootstrap.com/docs/4.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="javascripts/quiz.js"></script>
    <title>NumberQuiz</title>
</head>
<body>

<% Quiz quiz = (Quiz)session.getAttribute("quiz"); %>
<% String answer = (String)request.getAttribute("answer"); %>
<% boolean error = (boolean)request.getAttribute("error"); %>
<% String errorAgeMsg = (String)request.getAttribute("errorAgeMsg"); %>

<form method='get' class='form-quiz'>
    <div class='text-center mb-4'>
        <h3 class='h3 mb-3 font-weight-normal'>Have fun with NumberQuiz!</h3>
        <p>
            Your age:
            <% if (session.getAttribute("age") != null && errorAgeMsg == null) { %>
                <%= session.getAttribute("age") %>
            <% } else { %>
                <input type='text' name='txtAge' value='' class='form-control' autocomplete='off' />
            <% } %>
        </p>

        <% if (errorAgeMsg != null) { %>
            <div class="alert alert-danger" role="alert">
                ${errorAgeMsg}
            </div>
        <% } %>

        <p>Your current score is: ${quiz.numCorrect}</p>
        <p>Guess the next number in the sequence!</p>
        <p>${quiz.currentQuestion.question}</p>
        <p>
            Your answer:
            <input type='text' name='txtAnswer' value='' class='form-control' autocomplete='off' />
        </p>

        <% if (error && (answer != null)) { %>
            <div class="alert alert-danger" role="alert">
                Your last answer was not correct! Please try again
            </div>
        <% } %>

        <input type='submit' name='btnNext' class='btn btn-lg btn-primary btn-block' value='Next' />
        <button type="button" class="btn btn-lg btn-secondary btn-block" data-toggle="popover" title="Hint!" data-content="${quiz.currentQuestion.hint}">Hint?</button>
        <input type='submit' name='btnRestart' class='btn btn-outline-secondary btn-lg btn-block' value='Restart' />
    </div>
</form>
</body>
</html>



