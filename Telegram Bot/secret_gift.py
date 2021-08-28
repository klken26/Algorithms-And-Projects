from telegram import Update
from telegram.ext import Updater, MessageHandler, CallbackContext, Filters, CommandHandler
import random
import copy


def addSecretGift(update: Update, context: CallbackContext) -> None:
    user_id = update.message.from_user.id
    if "gift_list" not in context.bot_data:
        context.bot_data["gift_list"] = []
    if len(context.args) < 1:
        update.message.reply_text("Please send your command again with the gift you want to add in the following format: /put 'giftname'")
    else:
        context.bot_data["gift_list"].append({user_id: " ".join(context.args)})
        update.message.reply_text("The gift was added successfully :)")
    # update.message.reply_text(context.bot_data["gift_list"])


def takeSecretGift(update: Update, context: CallbackContext) -> None:
    if "gift_list" not in context.bot_data:
        update.message.reply_text("There are no gifts currently available!")
        return
    user_id = update.message.from_user.id
    ls = copy.deepcopy(context.bot_data["gift_list"])
    # ls.append({123456: "cookies"})
    # ls.append({123456: "food"})
    # print(ls, user_id)
    filteredArr = list(filter(lambda x: list(x.keys())[0] != user_id, ls))
    print(filteredArr)
    if len(filteredArr) == 0:
        update.message.reply_text("There are no gifts currently available!")
        return
    giftGiven = random.choice(filteredArr)
    update.message.reply_text("Your gift was chosen! You got: \n" + str(list(giftGiven.values())[0]) + "\n:)")


def otherThan(update: Update, context: CallbackContext):
    update.message.reply_text("Please try again, I do not really understand what you're typing.")

##def greet(update: Update, context: CallbackContext) -> None:
    ##user_id = update.message.from_user.id
    ##if "users_talked_to" not in context.bot_data:
    ##    context.bot_data["users_talked_to"] = set()
    ##context.bot_data["users_talked_to"].add(user_id)
    ##num_people = len(context.bot_data["users_talked_to"])
    ##update.message.reply_text(f"Hello! A total of {num_people} people have spoken to this bot.")

updater = Updater('1493336374:AAE863dEoLrd7Q5LvLcoNt_YyBniuszX4vs')

##updater.dispatcher.add_handler(MessageHandler(Filters.text & (~ Filters.forwarded), greet))
updater.dispatcher.add_handler(CommandHandler("put", addSecretGift))
updater.dispatcher.add_handler(CommandHandler("take", takeSecretGift))
updater.dispatcher.add_handler(MessageHandler(Filters.all, otherThan))
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    updater.start_polling()
    updater.idle()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
