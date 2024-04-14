import express from "express";
const router = express.Router();
var question_count = 0;
var points = 0;

const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
  ];


router.get("/quiz", (req, res) => {
    if (question_count < 3)
    {
        res.send(triviaQuestions[question_count].question);
    }
    res.send(`Quiz completed. Your score is : ${points}`)
    
});

router.post("/quiz", (req, res) => {
    const answer = req.body;
    if (!answer)
    {
        return res
            .status(400)
            .json({ response: "Please include an answer in json form format ('answer': 'your answer')"})
    }

    var areEqual = answer.answer.toUpperCase() === triviaQuestions[question_count].answer.toUpperCase();
    question_count += 1;
    if (areEqual)
    {
        points += 1;
        return res.send("Correct answer")
    }
    return res.send("Incorrect answer")
});



export default router;