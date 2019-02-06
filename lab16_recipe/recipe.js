$(() => {
    "use strict";

    const $recipes = $('[name=recipe]');

    $recipes.on('click', (evt) => {
        fetchRecipe($(evt.target).val());
    });

    fetchRecipe($($recipes[0]).val());

    function fetchRecipe(recipe) {
        const recipeUrl = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/recipe/recipes.php';
        console.log(recipe)
        $.get(recipeUrl, {r: recipe})
            .done(showRecipe);
    }

    function showRecipe(xmlDom) {
        const baseImagePath = 'http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/recipe/example/';
        const imageSrc = $(xmlDom).find('information > picture').text();
        const name = $(xmlDom).find('information > name').text();
        const imageUrl = `${baseImagePath}${imageSrc}`;
        let items = '';

        $(xmlDom).find('item').each(function(idx, e) {
            let item = $(e).text();
            items += `<li>${item}</li>`;
        });

        let content = `
            <img src="${imageUrl}" />
            <h1>${name}</h1> 
            <ul>
                ${items}
            </li>`;

        $('#main').html(content);
    }
});