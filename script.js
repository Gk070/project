document.getElementById('ingredientForm').addEventListener('submit', generateAbsurdRecipe);
document.getElementById('ingredientInput').addEventListener('keypress', addCustomIngredient);

const customIngredients = [];

function addCustomIngredient(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const ingredientInput = document.getElementById('ingredientInput');
        const ingredient = ingredientInput.value.trim();

        if (ingredient) {
            customIngredients.push(ingredient);
            displayCustomIngredients();
            ingredientInput.value = '';
        }
    }
}

function displayCustomIngredients() {
    const customIngredientList = document.getElementById('customIngredientList');
    customIngredientList.innerHTML = customIngredients.map(ing => `<li>${ing}</li>`).join('');
}

function generateAbsurdRecipe(event) {
    event.preventDefault();

    if (customIngredients.length === 0) {
        alert("Please add at least one ingredient!");
        return;
    }

    const whimsicalWords = ["Mystical", "Magical", "Enchanted", "Bizarre", "Dreamy", "Galactic", "Whimsical", "Invisible"];
    const randomWhimsicalWord = whimsicalWords[Math.floor(Math.random() * whimsicalWords.length)];

    // Generate recipe name based on ingredients
    let mainIngredient = customIngredients[0].split(" ")[0]; // Take the first word of the first ingredient
    if (mainIngredient.length < 3 && customIngredients.length > 1) {
        mainIngredient = customIngredients[1].split(" ")[0]; // Use second ingredient if first is too short
    }

    const recipeName = `${randomWhimsicalWord} ${mainIngredient.charAt(0).toUpperCase() + mainIngredient.slice(1)} Delight`;

    // Generate custom instructions for each ingredient
    const instructions = customIngredients.map(ingredient => {
        const actions = [
            `Gently sprinkle the ${ingredient} over a roaring fire.`,
            `Chop the ${ingredient} into cubes and toss them skyward.`,
            `Carefully fold the ${ingredient} into a whirlpool of delight.`,
            `Blend the ${ingredient} until it sparkles like stardust.`,
            `Melt the ${ingredient} in a cauldron under the full moon.`,
            `Season the ${ingredient} with laughter and a pinch of nonsense.`,
            `Boil the ${ingredient} until it dances on its own.`,
            `Bake the ${ingredient} in an invisible oven set to 'whimsical.'`,
            `Whisk the ${ingredient} until it hums a happy tune.`,
            `Gently massage the ${ingredient} to bring out its hidden powers.`,
            `Soak the ${ingredient} in a bowl of enchanted rainwater under the stars.`,
            `Scatter the ${ingredient} across a field of fairy dust and let it soak up magic.`,
            `Place the ${ingredient} on a pedestal and bow three times before stirring.`,
            `Add a pinch of ${ingredient} while reciting your favorite nursery rhyme.`,
            `Sauté the ${ingredient} until it glows in the dark.`,
            `Freeze the ${ingredient} in an iceberg and thaw it with a dragon’s breath.`,
            `Fold the ${ingredient} into a swirl of colors and watch it transform.`,
            `Stir the ${ingredient} with a wand and make a wish.`,
            `Toast the ${ingredient} until it’s as crispy as a morning sunrise.`,
            `Pour the ${ingredient} into a goblet and chant an ancient spell.`,
            `Grate the ${ingredient} over a mountain and wait for the wind to carry its aroma.`,
            `Dip the ${ingredient} in liquid sunshine and let it sparkle.`,
            `Layer the ${ingredient} with clouds and bake until it reaches the stars.`,
            `Fry the ${ingredient} in a pan made of dreams.`,
            `Dissolve the ${ingredient} in laughter and sprinkle with stardust.`,
            `Toss the ${ingredient} over your shoulder for good luck, then catch it mid-air.`,
            `Simmer the ${ingredient} while playing a lullaby.`,
            `Fold the ${ingredient} gently, as if it were a secret message to the universe.`,
            `Let the ${ingredient} rest until it develops an air of mystery.`,
            `Brew the ${ingredient} in a cauldron and let it simmer until midnight.`,
            `Sprinkle the ${ingredient} with kindness and let it grow wings.`,
            `Roll the ${ingredient} down a hill and catch it at the bottom.`,
            `Mix the ${ingredient} with the essence of a full moon and the sound of laughter.`,
            `Balance the ${ingredient} on your nose while adding a dash of wonder.`
        ];
        return actions[Math.floor(Math.random() * actions.length)];
    });

    // Display recipe
    document.getElementById('recipeName').textContent = recipeName;
    document.getElementById('ingredientList').innerHTML = customIngredients.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('instructions').textContent = instructions.join(" ");
    document.getElementById('recipe').classList.remove('hidden');
}
