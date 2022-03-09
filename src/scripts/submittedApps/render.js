import { accordionDiv } from "./elements.js";
import { skillsData } from "../shared/globalVariables.js";
export function renderApplications(applications) {
	accordionDiv.innerHTML = "";
	let counter = 0;
	let html = "";
	for (let app of applications) {
		++counter;
		html += `
    <div class="accordion-item">
					<h2 class="accordion-header" id="heading${counter}">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapse${counter}"
							aria-expanded="false"
							aria-controls="collapse${counter}"
						>
							${app["first_name"]} ${app["last_name"]} 
						</button>
					</h2>
					<div
						id="collapse${counter}"
						class="accordion-collapse collapse"
						aria-labelledby="heading${counter}"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<div class="application-container disablePointerEvent">
								<div class="personal-information">
									<h3>Personal Information</h3>
									<div>
										<span>First Name</span>
										<span>${app["first_name"]}</span>
									</div>
									<div>
										<span>Last Name</span>
										<span>${app["last_name"]}</span>
									</div>
									<div>
										<span>Email</span>
										<span>${app.email}</span>
									</div>
									<div>
										<span>Phone</span>
										<span>${app.phone}</span>
									</div>
								</div>
								<div class="skillset personal-information">
									<h3>Skillset</h3>
                                    ${generateSkills(app.skills)}
									 
								</div>
								<div class="covid-situation">
									<h3>Covid Stuff</h3>
									<div class="">
										<h5>how would you prefer to work</h5>
										<br />
										${generateWorkPreference(app["work_preference"])}
									</div>

									<div class="">
										<h5>Did you contact covid 19? :(</h5>
                                        ${generateCovidStatus(app["had_covid"])}
									</div>
									${generateCovidDate(app)}
									<div class="">
										<h5>Have you been vaccinated</h5>
                                        ${generateVaccinationStatus(
																					app["vaccinated"],
																				)}
								
									</div>
                                    ${generateVaccinationDate(app)}
								</div>
								<div class="insight">
									<h3>Insights</h3>
									<div class="questionareItem">
										<h5 class="devTalkAttendQuestion">
											Would you attend Devtalks and maybe also orginize your own
										</h5>
										${generateDevTalkAttendance(app["will_organize_devtalk"])}
										 
									</div>
								    ${generateDevTalkTopic(app)}

									 ${generateSpecialAboutMe(app["something_special"])}
								</div>
							</div>
						</div>
					</div>
				</div>
    
    `;
	}

	accordionDiv.insertAdjacentHTML("beforeend", html);
}

function generateSpecialAboutMe(text) {
	return `<div class="questionareItem">
				<h5>Tell us something special</h5>
				<textarea
				 
					name="specialAboutMe"
					id="specialAboutMe"
					cols="30"
					rows="10"
					placeholder="I..."
				>${text}</textarea>
			</div>`;
}

function generateDevTalkAttendance(status) {
	return `
	     <input
	     	  value="true"
	     	  id="yesAttend"
	     	  type="radio" 
	     	  ${checkYesNo(status, true)}
	      	/>
	         	<label for="yesAttend">Yes</label>
	         	<br />
	         	<input
	     		${checkYesNo(status, false)}
	           		value="false"
	           		id="noAttend"
	           		type="radio" 
	           />
	        <label for="noAttend">No</label>`;
}

function generateDevTalkTopic(app) {
	let html = "";
	if (app["will_organize_devtalk"]) {
		html = `
		<div class=" ">
		 		<h5>What would you speal about at Devtalks</h5>
		 		<textarea 
		 			placeholder="I would"
		 			name="devtalkTopic"
		 			id="devtalkTopic"
		 			cols="30"
		 			rows="10"
		 		>${app["devtalk_topic"]}</textarea>
	 	</div>
		`;
	}

	return html;
}

function generateVaccinationStatus(status) {
	return `
    <input
			value="true"
            ${checkYesNo(status, true)}
			id="yesVaccine"
			type="radio" 
		/>
		<label for="yesVaccine">Yes</label>
		<br />
		<input
			value="false"
            ${checkYesNo(status, false)}
			  id="noVaccine"
			  type="radio" 
			 		/>
		 <label for="noVaccine">No</label>`;
}

function generateVaccinationDate(app) {
	let html = "";

	if (app["vaccinated"]) {
		html = `
        <div>
			<h5>When did you get your last covid vaccine</h5>
             <input
			class="dateInputs"
			id="lastVaccinationDate"
			type="date"
            value="${app["vaccinated_at"]}"
			name="lastVaccinationDate"
		/>
	</div> 
       `;
	}

	return html;
}

function generateCovidStatus(status) {
	return `
    <input
				value="true"
                ${checkYesNo(status, true)}
				id="yesInfection"
				type="radio" 
			/>
			<label for="yesInfection">Yes</label>
			<br />
			<input
            ${checkYesNo(status, false)}
				value="false"
				id="noInfection"
				type="radio" 
			/>
			<label for="noInfection">No</label>`;
}

function generateCovidDate(app) {
	let html = "";
	if (app["had_covid"]) {
		html = `
    <div>
		 	<h5>When</h5>
		 	<input
		 		class="dateInputs"
		 		type="date"
                 value="${app["had_covid_at"]}"
		 		id="infectionDate"
		 		name="infectionDate"
		 	/>
    </div>`;
	}

	return html;
}

function checkYesNo(selected, option) {
	return selected == option ? "checked" : "";
}

function generateSkills(skills) {
	let html = "";
	for (let skill of skills) {
		const skillTiTle = skillsData.find((el) => el.id == skill.id).title;
		html += `
        <div>
			<span>${skillTiTle}</span>
			<span>${skill.experience}</span>
		</div>
                                    `;
	}
	return html;
}

function generateWorkPreference(workpreference) {
	return `<input
                ${checkChosen("from_sairme", workpreference)}
				value="from_sairme"
				id="sairme"
				type="radio" 
				/>
				    <label for="sairme">From Sairme Office</label>
				    <br />
				    <input
                        ${checkChosen("from_home", workpreference)}
				    	value="from_home"
				    	id="home"
				    	type="radio" 
				    />
				    <label for="home">From Home</label>
				    <br />
				    <input
                    ${checkChosen("hybrid", workpreference)}
				    	value="hybrid"
				    	id="hybrid"
				    	type="radio" 
				    />
				<label for="hybrid">Hybrid</label>`;
}

function checkChosen(option, selected) {
	return option == selected ? "checked" : "";
}
