package cs472.mum.edu.model;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private List<Question> questions;
    private int currentQuestionIndex = 0;
    private int currentScore = 0;

    public Quiz() {
        this.questions = new ArrayList<>();
        loadQuestions();
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getNumCorrect() {
        return currentScore;
    }

    public Question getCurrentQuestion() {
        return questions.get(getCurrentQuestionIndex());
    }

    public int getCurrentQuestionIndex() {
        return currentQuestionIndex;
    }

    public boolean isCorrect(String answer) {
        return getCurrentQuestion().getAnswer().equals(answer);
    }

    public void scoreAnswer() {
        if (currentQuestionIndex < getNumQuestions() - 1)
            currentQuestionIndex++;

        if (currentScore < getNumQuestions())
            currentScore++;
    }

    public void reset() {
        currentQuestionIndex = 0;
        currentScore = 0;
    }

    private void loadQuestions() {
        Question q1 = new Question("[3, 1, 4, 1, 5, ? ]", "9");
        Question q2 = new Question("[1, 1, 2, 3, 5, ? ]", "8");
//        Question q3 = new Question("[1, 4, 9, 16, 25, ? ]", "36");
//        Question q4 = new Question("[2, 3, 5, 7, 11, ? ]", "13");
//        Question q5 = new Question("[1, 2, 4, 8, 16, ? ]", "32");
        questions.add(q1);
        questions.add(q2);
//        questions.add(q3);
//        questions.add(q4);
//        questions.add(q5);
    }
}
