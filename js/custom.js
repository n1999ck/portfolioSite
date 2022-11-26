function showPaper(paperTitle){
    var paperFrame = document.getElementById("paperFrame");
    var paperLocation = './content/' + paperTitle + '.pdf';

    paperFrame.src = paperLocation;
}

function modal(image){
    //referenced https://www.w3schools.com/howto/howto_css_modals.asp
    var imgLocation = './content/' + image + '.jpg';
    document.getElementById("modalbg").style.display = "block";

    const displayImage = document.getElementById('displayImage');
    displayImage.style.display = "block";
    displayImage.src = imgLocation;
}

function hideModal(){
    document.getElementById("modalbg").style.display = "none";
    document.getElementById("displayImage").style.display = "none";
}

function showRecipe(recipeName){
    //sets inner HTML of recipe window to whatever is selected
    const bananaBreadRecipe = "<h1>Banana Bread</h1>\n" +
        "                        <h2>Ingredients</h2>\n" +
        "                        <ul>\n" +
        "                        <li>4-5 very ripe bananas, mashed - about 2 cups</li>\n" +
        "                        <li>1/2 cup applesauce</li>\n" +
        "                        <li>1/2 cup whey</li>\n" +
        "                        <li>/2 cup greek yogurt</li>\n" +
        "                        <li>2 tsp baking soda</li>\n" +
        "                        <li>1 cup (2 sticks) unsalted butter, very soft</li>\n" +
        "                        <li>1 1/2 cup brown sugar</li>\n" +
        "                        <li>2 eggs, room temperature</li>\n" +
        "                        <li>2 tsp vanilla extract</li>\n" +
        "                        <li>3 cup all-purpose flour</li>\n" +
        "                        <li>2 tsp baking powder</li>\n" +
        "                        <li>1 tsp salt</li>\n" +
        "                        <li>1 tsp pumpkin pie spice</li>\n" +
        "                        </ul>\n" +
        "                        <h2>Instructions</h2>\n" +
        "                        <ol>\n" +
        "                            <li>Place 12” cast iron skillet in oven and begin preheating to 350F.</li>\n" +
        "                            <li>In a large bowl, combine bananas, applesauce, whey, yogurt, and baking soda.</li>\n" +
        "                            <li>In a medium bowl, combine flour, baking powder, salt, and pumpkin pie spice.</li>\n" +
        "                            <li>In a large bowl, cream brown sugar and butter until well-combined.</li>\n" +
        "                            <li>Add eggs and vanilla extract and whisk until creamy.</li>\n" +
        "                            <li>Add pumpkin-banana-yogurt mixture and stir until combined.</li>\n" +
        "                            <li>Add flour mixture in three stages, stirring until just incorporated.</li>\n" +
        "                            <li>Pour batter into skillet and replace in oven. Bake at 350F for 50-55 minutes.</li>\n" +
        "                        </ol>";
    const chickenAlfredoRecipe = "<h1>Blackened Chicken and Spinach Alfredo</h1>\n" +
        "                            <h2>Ingredients</h2>\n" +
        "                            <ul>\n" +
        "                                <li>1 lb boneless skinless chicken thighs</li>\n" +
        "                                <li>1 lb short cut pasta</li>\n" +
        "                                <li>2 tbsp cooking oil</li>\n" +
        "                                <li>1/2 cup water as needed</li>\n" +
        "                                <li>4-6 cloves garlic, minced</li>\n" +
        "                                <li>1/4 cup (1/2 stick) butter</li>\n" +
        "                                <li>1/2 cup heavy cream</li>\n" +
        "                                <li>1/2 cup parmesan cheese, freshly grated</li>\n" +
        "                                <li>A few handfuls of fresh spinach</li>\n" +
        "                                <li>Salt & pepper</li>\n" +
        "                                <li>2 tsp smoked paprika</li>\n" +
        "                                <li>2 tsp Chili Powder</li>\n" +
        "                                <li>2 tsp Onion Powder</li>\n" +
        "                                <li>2 tsp Garlic Powder</li>\n" +
        "                                <li>2 tsp Italian Seasoning</li>\n" +
        "                            </ul>\n" +
        "                            <h2>Instructions</h2>\n" +
        "                            <ol>\n" +
        "                                <li>Start boiling a large pot of water, salting well (it really should taste like seawater!).\n" +
        "                                    Place a 12-inch cast iron skillet over medium heat.</li>\n" +
        "                                <li>Meanwhile, dice the chicken. Combine equal parts of all seasonings listed in a small\n" +
        "                                    bowl, then evenly coat the chicken in the mixture</li>\n" +
        "                                <li>Start cooking the pasta to al dente. When it’s done, be sure to reserve a cup or so\n" +
        "                                    of the pasta water.</li>\n" +
        "                                <li>When the cast iron is hot enough that a drop of water placed on it sizzles away\n" +
        "                                    immediately, add the oil to the pan and give it a few seconds to reach a shimmering\n" +
        "                                    heat. Add the chicken and spread it out so that each piece has contact with the pan.\n" +
        "                                    Give the chicken a few minutes to cook undisturbed until it’s lightened somewhat in\n" +
        "                                    color and comes off the pan easily, then flip/stir it to brown the other side. If any\n" +
        "                                    seasonings, etc., are at the bottom of the pan at this point, add a few tablespoons of\n" +
        "                                    water and use your cooking spoon to scrape up browned bits, then stir it into a basic\n" +
        "                                    pan sauce.</li>\n" +
        "                                <li>Once the chicken is cooked, add the butter, then the garlic. Let the butter melt and\n" +
        "                                    garlic become fragrant, stirring to incorporate. Pour in the heavy cream and stir. Let\n" +
        "                                    the sauce come to a simmer.</li>\n" +
        "                                <li>After the sauce has thickened slightly (~1 minute simmering), add the Parmesan in\n" +
        "                                    handfuls, stirring between each addition</li>\n" +
        "                                <li>Stir in a few handfuls of spinach and let it wilt. At this point, if the sauce is too thick,\n" +
        "                                    add a few ounces of pasta water at a time until it’s a good consistency.</li>\n" +
        "                                <li>Finally, combine the sauce and the drained pasta and mix until the pasta is coated\n" +
        "                                    well.</li>\n" +
        "                                <li>Serve with garlic bread or rolls.</li>\n" +
        "                            </ol>";
    var instantPotYogurtRecipe = "<h1>Instant Pot Yogurt</h1>\n" +
        "                            <h2>Ingredients</h2>\n" +
        "                            <ul>\n" +
        "                                <li>1 gallon whole milk</li>\n" +
        "                                <li>1/4 cup yogurt with active cultures</li>\n" +
        "                            </ul>\n" +
        "                            <h2>Instructions</h2>\n" +
        "                            <ol>\n" +
        "                                <li>Fill the Instant Pot halfway with water, then bring it to a boil using the sauté function to sterilize. Remove the inner ring of the Instant Pot lid.</li>\n" +
        "                                <li>Pour the milk into the pot. Press the yogurt button until the screen says \"boil.\" The pot should automatically shut off once it's heated the milk enough.</li>\n" +
        "                                <li>Remove the inner pot and let the milk cool for about an hour on a wire rack, until it reaches around 115°F.</li>\n" +
        "                                <li>Take a cup or so of milk out of the pot into a mug or bowl. Mix your starter yogurt into it, then pour it all back into the pot. This ensures a good distribution.</li>\n" +
        "                                <li>Place the inner pot back into the cooker then press the yogurt button until the screen reads 8:00.</li>\n" +
        "                                <li>Let the yogurt process for 8 hours.</li>\n" +
        "                                <li>Once it's done, place the inner pot in the refrigerator for at least 8 hours to let the yogurt set. </li>\n" +
        "                                <li>To strain, use a nut milk bag hung over a bowl to catch the whey. Use the whey in baked goods or smoothies.</li>\n" +
        "                            </ol>";
    var coldBrewRecipe = " <h1>Sweet Cream Cold Brew Coffee</h1>\n" +
        "                            <h2>Ingredients</h2>\n" +
        "                            <ul>\n" +
        "                                <li>1 cup sugar</li>\n" +
        "                                <li>1 cup water</li>\n" +
        "                                <li>1 cup heavy cream</li>\n" +
        "                                <li>1 cup ground coffee</li>\n" +
        "                            </ul>\n" +
        "                            <h2>Instructions</h2>\n" +
        "                                <ol>\n" +
        "                                    <li>Place the coffee into a cold brew steeping bag and place it in a pitcher. If you don't have a bag, you can place it directly into a pitcher, but will need to strain the coffee after brewing.</li>\n" +
        "                                    <li>Fill the pitcher with cool water, making sure to saturate the coffee grounds.</li>\n" +
        "                                    <li>Let the coffee brew for 12 to 24 hours in the refrigerator. Remove the grounds bag or strain them out.</li>\n" +
        "                                    <li>Combine sugar and water in a small saucepan over medium-low heat. Heat the mixture until the sugar dissolves, creating a simple syrup.</li>\n" +
        "                                    <li>Let the syrup cool for a few minutes, then add in the cream and stir until combined.</li>\n" +
        "                                    <li>In a tall glass, combine the coffee and cream to taste.</li>\n" +
        "                                </ol>";
    //Referenced https://stackoverflow.com/questions/6242976/javascript-hide-show-element for how to show or hide
    if (recipeName === "bananaBread"){
        document.getElementById("recipeWindow").innerHTML = bananaBreadRecipe; //shows the recipe
    } else if (recipeName === "chickenAlfredo"){
        document.getElementById("recipeWindow").innerHTML =  chickenAlfredoRecipe;
    } else if (recipeName === "ipYogurt"){
        document.getElementById("recipeWindow").innerHTML = instantPotYogurtRecipe;
    } else if (recipeName === "coldBrew"){
        document.getElementById("recipeWindow").innerHTML = coldBrewRecipe;
    }
}