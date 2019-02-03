package cs472.mum.edu.model;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private List<Question> questions = new ArrayList<>();
    private int currentQuestionIndex = 0;
    private int numCorrect = 0;
    private int score = 0;
    private int attemptCount = 0;
    public static final int MAX_ATTEMPT_COUNT = 3;

    public Quiz() {
        questions.add(new Question("[3, 1, 4, 1, 5]", "9", "PI"));
        questions.add(new Question("[1, 1, 2, 3, 5]", "8", "Fibonacci"));
//        questions.add(new Question("[1, 4, 9, 16, 25]", "36", "Self Multiply"));
//        questions.add(new Question("[2, 3, 5, 7, 11]", "13", "Prime"));
//        questions.add(new Question("[1, 2, 4, 8, 16]", "32", "n x 2"));
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getNumCorrect() {
        return numCorrect;
    }

    public Question getCurrentQuestion() {
        return questions.get(currentQuestionIndex);
    }

    public int getCurrentQuestionIndex() {
        return currentQuestionIndex;
    }

    public boolean isCorrect(String answer) {
        Question currentQuestion = getCurrentQuestion();

        attempt();
        if (!canAttempt()) {
            moveToNextQuestion();
        }

        return currentQuestion.getAnswer().equals(answer);
    }

    public void scoreAnswer() {
        if (!canAttempt()) return;

        int attemptCount = getAttemptCount();

        if (attemptCount == 1) {
            score += 10;
        } else if (attemptCount == 2) {
            score += 5;
        } else if (attemptCount == 3) {
            score += 2;
        }

        numCorrect++;
        this.attemptCount = 0;
        moveToNextQuestion();
    }

    public int getScore() {
        return score;
    }

    public void reset() {
        currentQuestionIndex = 0;
        score = 0;
        attemptCount = 0;
        numCorrect = 0;
    }

    public void attempt() {
        attemptCount++;
    }

    public int getAttemptCount() {
        return attemptCount;
    }

    public void moveToNextQuestion() {
        if (hasNextQuestion()) {
            currentQuestionIndex++;
            attemptCount = 0;
        }
    }

    public boolean canAttempt() {
        return attemptCount <= MAX_ATTEMPT_COUNT;
    }

    public boolean isOver() {
        if (isLastQuestion() && !canAttempt()) {
            return true;
        } else {
            return false;
        }
    }

    private boolean hasNextQuestion() {
        return currentQuestionIndex < getNumQuestions();
    }

    private boolean isLastQuestion() {
        return currentQuestionIndex == getNumQuestions() - 1;
    }
}
