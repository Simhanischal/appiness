
import { boneMarrowTypes } from './data.js';
import { warningSigns } from './data.js';
import { faqs } from './data.js';

function main(){
	function generateTypesList(types){
		const list = document.querySelector('.types-list');
		types.forEach(type => {
			const listItem = document.createElement('li');
			listItem.innerHTML = `${type.type} - ${type.description}`;
			listItem.classList.add('types-list-item');
			list.appendChild(listItem);
		});
	}
	generateTypesList(boneMarrowTypes);


	function generateWarningSigns(signs){
		const signsContainer = document.querySelector('.warning-signs');
		signs.forEach(sign => {
			const signContainer = document.createElement('div');
			signContainer.classList.add('warning-sign');
			const signImage = document.createElement('img');
			signImage.classList.add('sign-image');
			signImage.setAttribute('src', sign.image);
			signImage.setAttribute('alt', 'Sign Image');
			const signDescription = document.createElement('p');
			signDescription.classList.add('sign-description');
			signDescription.innerHTML = sign.description;
			signContainer.appendChild(signImage);
			signContainer.appendChild(signDescription);
			signsContainer.appendChild(signContainer);
		});
	}
	generateWarningSigns(warningSigns);


	function generateDoctorsList(numDoctors){
		const doctorsList = document.querySelector('.doctors-list');
		const doctor = document.querySelector('.doctor');

		for(let i = 0; i < numDoctors - 1; i++){
			const newDoctor = doctor.cloneNode(true);
			if(i === 0){
				newDoctor.childNodes[1].innerHTML = "Adult BMT";
			}
			else newDoctor.removeChild(newDoctor.childNodes[1]);
			doctorsList.appendChild(newDoctor);
		}
	}
	generateDoctorsList(4);
	
	
	function generateFaqs(faqList){
		const faqContainer = document.querySelector('.faq-container');

		faqList.forEach(faq => {
			const questionDiv = document.createElement('div');
			questionDiv.classList.add('question-container');

			const questionText = document.createElement('div');
			questionText.classList.add('question-text');
			questionText.innerHTML = faq.question;

			const questionButton = document.createElement('img');
			questionButton.classList.add('question-btn');
			questionButton.setAttribute('src', './public/expand.png');
			questionButton.setAttribute('alt', 'Expand Question');

			questionDiv.appendChild(questionText);
			questionDiv.appendChild(questionButton);

			const divider = document.createElement('div');
			divider.classList.add('faq-divider');
			
			const answerList = document.createElement('ul');
			answerList.classList.add('answer-list');
			faq.answers.forEach(answer => {
				const answerItem = document.createElement('li');
				answerItem.classList.add('answer-item');
				answerItem.innerHTML = answer;
				answerList.appendChild(answerItem);
			});

			faqContainer.appendChild(questionDiv);
			faqContainer.appendChild(divider);
			faqContainer.appendChild(answerList);

			questionButton.addEventListener('click', () => {
				if(answerList.style.display === 'none'){
					answerList.style.display = 'block';
				}
				else answerList.style.display = 'none';
			});
		});
	}
	generateFaqs(faqs);
}

main();