// Search form
const search = prompt("Search for blood group");

// filter data
const searchResult = bloodDoner.filter(
  (data) => data.group === search || data.gender === search
);

// final search result
const finalResult = [];

// get data
searchResult.forEach((item, index) => {
  if (item.age >= 18 && item.lastDonate >= 120) {
    // Calculate the difference between 120 and lastDonate
    const difference = 120 - item.lastDonate;

    // Add the difference to the item
    const newItem = { ...item, difference };

    // Push the modified item to finalResult
    finalResult.push(newItem);

    //Male or Female defination
    const pronoun = item.gender == "Male" ? "He" : "She";
    const upPronoun = item.gender == "Male" ? "Mr" : "Mst";
    const extraPronoun = item.gender == "Male" ? "His" : "Her";

    const donarDetails = `You're searching for ${search}. Now ${upPronoun} ${
      item.name
    } is available to donate and ${extraPronoun} contact number is ${
      item.phone
    } also ${pronoun} donate ${item.donars.join(", ")} peoples ${
      item.donateTime
    } times`;

    console.log(donarDetails);
  } else if (item.lastDonate >= 90) {
    // Calculate the difference between 120 and lastDonate
    const difference = 120 - item.lastDonate;

    // Add the difference to the item
    const newItem = { ...item, difference };

    // Push the modified item to finalResult
    finalResult.push(newItem);

    //Male or Female defination
    const pronoun = item.gender == "Male" ? "He" : "She";
    const upPronoun = item.gender == "Male" ? "Mr" : "Mst";
    const extraPronoun = item.gender == "Male" ? "His" : "Her";

    const elsedonarDetails = `You're searching for ${search}. Now no one is not available but after ${
      120 - item.lastDonate
    } days latter ${upPronoun} ${
      item.name
    } is available to donate and ${extraPronoun} contact number is ${
      item.phone
    } also ${pronoun} donate ${item.donars.join(", ")} peoples and ${
      item.donateTime
    } times`;

    console.log(elsedonarDetails);
  }
});

// show result
console.table(finalResult);
