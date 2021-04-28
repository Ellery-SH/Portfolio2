import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  { Card } from 'react-native-elements';
import {Quizquestions} from '../components/Questions.js';
import {AppButton} from '../components/button.js'
import {styles} from '../components/styles.js'
import Timer from '../components/timer.js'


export default function QuizLayout() {
	const questions = Quizquestions.filter(item => item.category==='Geography')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	};
	return (
		<Card>
			{showScore ? (
				
					<Text>You scored {score} out of {questions.length}</Text>
				
			) : (
				<>
					<View>
						
							<Text style={styles.questionhead}>Question {currentQuestion + 1} of {questions.length}</Text>
							<Timer> </Timer>
						
						<Text style={styles.questionFont}>
                            {questions[currentQuestion].questionText}
                        </Text>
					</View>
					<View style={styles.appButtonView}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<AppButton style={styles.buttonstyle} title = {answerOption.answerText} onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}></AppButton>
						))}
					</View>
				</>
			)}
		</Card>
	);
}
