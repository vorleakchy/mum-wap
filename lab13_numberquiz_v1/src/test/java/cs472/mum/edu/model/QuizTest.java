package cs472.mum.edu.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * @since 4/8/09
 * @author levi
 * JUnit test for the TestQuiz class.  Basic verification tests that all pass as of 4/8/09.
 */
class QuizTest {
    Quiz quizUnderTest = new Quiz();

    @Test
    void testGetNumberOfQuestions() {
        assertEquals(2, quizUnderTest.getNumQuestions());
    }

    @Test
    void testIsCorrect() {
        assertEquals(true, quizUnderTest.isCorrect("9"));
    }

    @Test
    void testGetNumberQuestions() {
        assertEquals(2, quizUnderTest.getNumQuestions());
    }

    @Test
    void testGetNumberCorrect() {
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer(); //should increment the score and the current question number
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());
    }

    @Test
    void testReset() {
        quizUnderTest.scoreAnswer();
        quizUnderTest.reset();
        assertEquals(0, quizUnderTest.getNumCorrect());
        assertEquals(0, quizUnderTest.getCurrentQuestionIndex());
    }
}