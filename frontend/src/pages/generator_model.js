const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(config);

const runPrompt = async (userPreferences) => {
  console.log('runPrompt called with userPreferences:', userPreferences);
  const prompt = `plan for me a ${userPreferences.tripDates} day detailed itinerary for a trip to ${userPreferences.destination}. I land in the ${userPreferences.arrivalTiming} and leave in the ${userPreferences.returnTiming}. I would like to do ${userPreferences.activitiesPerDay} activities a day, including ${userPreferences.activityPreferences} and not inclusive of meals. I would like to eat ${userPreferences.foodType} and my budget is ${userPreferences.budget}. Present the itinerary in a table with the time allocated for each activity and meal, possible cost of each activity and meal and the possible transportation methods for each activity and meal.`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 3800,
    temperature: 1,
  });

  return response.data; // Return the generated data instead of logging it.
};
export { runPrompt };
