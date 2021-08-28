from telegram import Update
import functools
from telegram.ext import Updater, MessageHandler, CommandHandler, CallbackContext, Filters


def hello(update: Update ##the Update is the class
          , context: CallbackContext) -> None:
    print(update)
    ##update.message.reply_text('Hello' + " " + update.message.text + '!')
    update.message.reply_text(spongeBobCase(update.message.text))

def adder(update: Update, context: CallbackContext):
    ##update.message.reply_text("Going to add...")

    if len(context.args) < 2:
        update.message.reply_text("Please type the command again with your list of integers "
                              "(more than 1 please!) in this manner: "
                              "For example, "
                              "/add 1 2")
    else:
        ls = []
        for i in range(0, len(context.args)):
            ls.append(int(context.args[i]))
            print(ls)
        update.message.reply_text(functools.reduce(lambda a , b: a + b, ls))




def spongeBobCase(string):
    lowerStrSplit = list(string.lower())
    for i in range(0, len(lowerStrSplit)):
        if i%2== 0 and lowerStrSplit[i] != " ":
            lowerStrSplit[i] = lowerStrSplit[i].upper()
    return "".join(lowerStrSplit)




updater = Updater('1520255681:AAEAtQYqAfOYlpY6zOdSpwptVSJDE_7sCX0')

updater.dispatcher.add_handler(CommandHandler("add", adder))
updater.dispatcher.add_handler(MessageHandler(Filters.text, callback=hello))



# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    updater.start_polling()
    updater.idle()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
