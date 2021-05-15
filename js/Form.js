class Form {
    constructor(){}
    
    display(){
        var title = createElement('h3')
        title.html("Car Racing Game")
        title.position(130,0)

        var input = createInput("Input Name")
        input.position(200,250)

        var button = createButton("Play")
        button.position(200,280)

        var greeting = createElement('h2');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            greeting.html("Hello " + name);
            greeting.position(130,160);

        })
    }

}