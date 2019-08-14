# Alexa-Project
Project Name: Entergy Field Employee Alexa Skill
Code Author: Jason LaHatte, 504-905-3206, jjlahatte@gmail.com

Source code can be found under Amazon Alexa Developer Console, AWS, or GitHub.
Contact Jason LaHatte for GitHub repo

Code written in JavaScript, backend Alexa AWS Lambda hosted Node.js, can be hosted on local machine if needed.
Runtime: Node.js

Project owned by Entergy

Purpose: The purpose of this project is to enable field workers to more efficiently fill out forms and eventually other requirements for them to be able to fix powerline damage quicker. 

How it was built: Built using guidelines provided by Amazon. All Alexa skills are virtually built the same; for the device to ‘talk’ to users, language is broken down into ‘intents.’ Intent models are written in .json format saved under a file named by the intent’s language. For example, for an intent written in American English, the file would be called en-US.json. 

Intents contain language models which direct the dialog for how the skill directs a conversation with the user. For more detailed explanation on how the intent works and what its syntax is, refer to Amazon provided documentation: https://developer.amazon.com/docs/smapi/interaction-model-schema.html.

 Language intent models are run and processed by intent handlers in the main, index.js, file. Several intents are already premade by Amazon, but their handlers must be written out. Again, for specific information refer to Amazon documentation: https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html

To access the skill’s main code and to test it. Go to the Amazon Alexa console, this service requires a Amazon developer account, which is free, and it also requires a AWS account if the skill is going to be hosted on a local server instead of Alexa hosted. 
Alexa Console: https://developer.amazon.com/alexa/console/ask/build/custom/amzn1.ask.skill.b214338d-0831-402e-a836-84b2abae27ec/development/en_US/json-editor

To access Lambda, which will be used for the endpoint, go to the AWS console. https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2

To test Skill: In the Alexa Development Console, where the skill itself is found, there is a testing tab. To test, one uses an Alexa simulator which is the actual Alexa app but found in this testing suite. Testing can also be done via json input but using the Alexa simulator is easier.

To test a skill, you use the sample utterances and invocation name found in the language model file. To start this, the invocation name is ‘safety.’ To start, type safety into the Alexa simulator, this will launch the skill, after the welcome prompt you either state the form or can ask for help. Doing this will trigger different intents and everything including debugging information will be recorded in the console log. Again, for more specific information refer to the linked Amazon documentation above.

The App: Completed is the basic skeleton of what this skill could be. It asks one question for the ‘safety form.’ The only answer that works in no. The code for an API is there but incomplete. In the future, all questions for both forms and the API  
