/*  _     _                        ___                 _              _   
   /_\   | |  ___  __ __  __ _    | _ \  _ _   ___    (_)  ___   __  | |_ 
  / _ \  | | / -_) \ \ / / _` |   |  _/ | '_| / _ \   | | / -_) / _| |  _|
 /_/ \_\ |_| \___| /_\_\ \__,_|   |_|   |_|   \___/  _/ | \___| \__|  \__|
                                                    |__/                  
*/

/*To do, make proper call function to interact with model and use the device
  Should have something feasible afer*/
  
/*Code Author: Jason LaHatte, Entergy Alexa Project to fill out safety forms
  Contact: jjlahatte@gmail.com for questions 
  Inline comments included to try and explain how 
  Alexa code works for future coders
  Written with Javascript, runs on Node.js*/
  
  /*to do list: 
    get the API to send data to energy, (requires outside source),
    fix yes answer, add NA, and fix question asking
    */
    
const Alexa = require('ask-sdk-core');

const questions = [
    'Are there any nearby traffic risks?',
    'Do you have all PPE required?',
    'Are there any obstacles on the ground blocking the path?',
    'Can the customer recieve service without any undue risk?',
    'Is a voltage check required?',
    'Do you need to clear the public from the area?',
    'Have you stretched before the task?',
    'If switching is to be done, have all instructions been cleared?',
    'Has the inspection verified that all standards have been met?',
    'Have all hazards been communicated with everyone if you are not alone?',
];


//THIS IS NOT COMPLETE, API URL FOR CLICKMOBILE CLOUD SERVER FOR Entergy
//IS NEEDED BEFORE BEGINNING THIS processed
//API DOES NOT WORK
//put this is another file eventually

/*var package = require(“/.package.json”);

var FormAPIforClick = require(“.lib/FormAPIforClick.js”);

console.log(“loaded ” + package.name + “, version ” + package.version);

exports.handler = function (event, context) {
FormAPIforClick.handleRequest(event, context.done);
}*/

/*var callAPI = function (callbackDistMethod) {

    var url = "NOT AVAILBLE YET";
    //var req = https.get(url, (res) => {
        var body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        res.on("end",  () => {
            var result = JSON.parse(body);

            callbackDistMethod({"speech":result.items[0].message + ". " });

            //callback('test');
        });
    }).on("error", (error) => {
        //callback(err);
        console.log('error');
    });
};*/

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to the employee field portal, state which form you need or ask for help';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
       
        //const factArr = questions;
        //const factIndex = Math.floor(Math.random() * questions.length)
       // const randomFact = factArr[10];
       // const speechOutput = questions;//randomFact;

const HelloWorldIntentHandler = {
   
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Are there any nearby traffic risks?';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt()
            .getResponse()
             
            /*.speak('question 2')
            .reprompt()
            .getResponse()
           
             
            .speak('question 3')
            .reprompt()
            .getResponse()
            
            .speak('question 4')
            .reprompt()
            .getResponse()
             
            .speak('question 5')
            .reprompt()
            .getResponse();*/
            
    }
};

/*const APIIntentHandler = {
     canHandle(handlerInput) {
         
         const startMessage = 'starting form';
         
    const request = handlerInput.requestEnvelope.request;
    console.log("Inside QuestionIntentHandler");
    console.log(JSON.stringify(request));
    return request.type === "IntentRequest" &&
           (request.intent.name === "QuestionIntentIntent" || request.intent.name === "AMAZON.StartOverIntent");
  },
  handle(handlerInput) {
    console.log("Inside QuizHandler - handle");
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const response = handlerInput.responseBuilder;
    

    var question = askQuestion(handlerInput);
    var speakOutput = question;
    //var repromptOutput = question;

    const item = attributes.questionItem;
    const property = attributes.quizProperty;
  
        
    return response.speak(speakOutput)
            
                   .reprompt()
                   .getResponse();
  },
};*/

const HazardFormIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HazardFormIntent';
    },
    handle(handlerInput) {
        const speechText = 'test output';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt()
            .getResponse();
           
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Do you need the safety form or the outage form?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};
/*canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    const request = requestEnvelope.request;
 
    console.log(`Session ended with reason: ${request.reason}: ${request.error.type}, ${request.error.message}`);
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
 
 
    return handlerInput.responseBuilder
      .withShouldEndSession(true)
      .getResponse();
  },

    
    //handle(HandlerInput) {
    console.log("Inside SessionEndedRequestHandler");
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const request = handlerInput.requestEnvelope.request;

    return request.type === `IntentRequest` && (
              request.intent.name === 'AMAZON.StopIntent' ||
              request.intent.name === 'AMAZON.PauseIntent' ||
              request.intent.name === 'AMAZON.CancelIntent'
           //};
  },
  handle(handlerInput) {
      const exitSkillMessage = 'Complete, thank you';
    return handlerInput.responseBuilder
      .speak(exitSkillMessage)
      .getResponse();
  },
};*/


// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const YesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
   // const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    //const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    /*const speechOutput = "yes";
    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
    if (sessionAttributes.questions) {
      return handlerInput.responseBuilder.speak(sessionAttributes.speechOutput)
        .reprompt(sessionAttributes.repromptText)
        .getResponse();
    }*/

    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speechOutput = "yes";
    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
  },  
  
};

const NoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speechOutput = "No";
    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
  },
};

const AnswerIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent');
  },
  handle(handlerInput) {
    if (handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent') {
      return true;
    }
    else
    return false;
  },
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        HazardFormIntentHandler,
        YesIntentHandler,
        AnswerIntentHandler,
        NoIntentHandler,
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        //APIIntentHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
        //.console.log() 
    .lambda();
