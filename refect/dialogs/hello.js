(function(controller) {
    // listen for literal string 'hello-intent' (case insensitive)
    controller.hears('hello-intent', 'direct_message', dialogflowMiddleware.hears, function (
        bot,
        message
    ) {
        bot.reply(message, 'Howdy!!!!!');
    });
})