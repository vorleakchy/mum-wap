package cs472.mum.edu.model;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private List<Question> questions = new ArrayList<>();
    private int currentQuestionIndex = 0;
    private int numCorrect = 0;

    public Quiz() {
        questions.add(new Question("[3, 1, 4, 1, 5]", "9", "PI"));
        questions.add(new Question("[1, 1, 2, 3, 5]", "8", "Fibonacci"));
        questions.add(new Question("[1, 4, 9, 16, 25]", "36", "Self Multiply"));
        questions.add(new Question("[2, 3, 5, 7, 11]", "13", "Prime"));
        questions.add(new Question("[1 2 4 8 16]", "32", "n x 2"));
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getNumCorrect() {
        return numCorrect;
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

        if (numCorrect < getNumQuestions())
            numCorrect++;
    }

    public void reset() {
        currentQuestionIndex = 0;
        numCorrect = 0;
    }
}
