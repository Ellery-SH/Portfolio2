import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  { Card } from 'react-native-elements';
import {Quizquestions} from '../components/Questions.js';
import {AppButton} from '../components/button.js'
import {styles} from '../components/styles.js'
import Timer from '../components/timer.js'


export default function QuizLayout( {navigation, route}) {
	const questions = Quizquestions.filter(item => item.category===route.params.category)
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
				

				<View style={styles.appButtonView}>

					<Text>You scored {score} out of {questions.length}</Text> <AppButton title = "Take another quiz!" onPress={() => {navigation.navigate('Home')}}></AppButton>
					</View>
				
			) : (
				<>
					<View>
						
							<Text style={styles.questionhead}>Question {currentQuestion + 1} of {questions.length}</Text>
							<Timer NextQuestion={() => handleAnswerOptionClick(false)}> </Timer>
						
						<Text style={styles.questionFont}>
                            {questions[currentQuestion].questionText}
                        </Text>
					</View>
					<View style={styles.appButtonView}>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<AppButton key={index } style={styles.buttonstyle} title = {answerOption.answerText} onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}></AppButton>
						))}
					</View>
				</>
			)}
		</Card>
	);
}
